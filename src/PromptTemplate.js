import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import {
  CHARACTERS_KEY,
  ENVIRONMENTS_KEY,
  ACCESSORIES_KEY,
  FRIENDS_KEY,
  SAVEDPROMPTS_KEY,
} from './Data';

function PromptTemplate() {
  const characters = JSON.parse(localStorage.getItem(CHARACTERS_KEY));
  const environments = JSON.parse(localStorage.getItem(ENVIRONMENTS_KEY));
  const accessories = JSON.parse(localStorage.getItem(ACCESSORIES_KEY));
  const friends = JSON.parse(localStorage.getItem(FRIENDS_KEY));

  const [character, setCharacter] = useState(
    () => characters[Math.floor(Math.random() * characters.length)]
  );
  const [environment, setEnvironment] = useState(
    () => environments[Math.floor(Math.random() * environments.length)]
  );
  const [accessory, setAccessory] = useState(
    () => accessories[Math.floor(Math.random() * accessories.length)]
  );
  const [friend, setFriend] = useState(
    () => friends[Math.floor(Math.random() * friends.length)]
  );

  const [style, setStyle] = useState('message-hidden');

  function generateRandomPrompt() {
    setCharacter(
      (prevCharacter) =>
        characters[Math.floor(Math.random() * characters.length)]
    );
    setEnvironment(
      (prevEnvironment) =>
        environments[Math.floor(Math.random() * environments.length)]
    );
    setAccessory(
      (prevAccessory) =>
        accessories[Math.floor(Math.random() * accessories.length)]
    );
    setFriend(
      (prevFriend) => friends[Math.floor(Math.random() * friends.length)]
    );
  }

  function saveNewPrompt() {
    console.log('savePrompt func is called');

    // retrieving existing prompts
    const existingPrompts = JSON.parse(localStorage.getItem(SAVEDPROMPTS_KEY));

    // saving new prompt
    const newPrompt = {
      character,
      environment,
      accessory,
      friend,
      isDrawn: false,
    };

    const isDuplicate = existingPrompts.some(
      (prompt) =>
        prompt.character === newPrompt.character &&
        prompt.environment === newPrompt.environment &&
        prompt.accessory === newPrompt.accessory &&
        prompt.friend === newPrompt.friend
    );

    if (!isDuplicate) {
      existingPrompts.push(newPrompt);

      // update localStorage with new prompt
      localStorage.setItem(SAVEDPROMPTS_KEY, JSON.stringify(existingPrompts));

      // alert('Prompt Saved Successfully');
      setStyle('message-visible');

      // reset success message
      setTimeout(() => {
        setStyle('message-hidden');
      }, 500);
    } else if (isDuplicate) {
      alert('Prompt has already been saved');
    }

    //after saving prompt, auto generate new prompt
    generateRandomPrompt();
    // setStyle('message-hidden');
  }

  return (
    <div className='prompt-template'>
      <h1>
        <b>Your prompt is</b>
      </h1>
      <br />
      <Col>
        <Card
          border='success'
          style={{
            width: '100%',
            backgroundColor: '#212529',
          }}
        >
          <Card.Header style={{ color: '#85BAA1' }}>Prompt</Card.Header>
          <Card.Body>
            <Card.Title className='card-title'>Character</Card.Title>
            <Card.Text className='card-text'>{character}</Card.Text>
            <Card.Title className='card-title'>Environment</Card.Title>
            <Card.Text className='card-text'>{environment}</Card.Text>
            <Card.Title className='card-title'>Accessory</Card.Title>
            <Card.Text className='card-text'>{accessory}</Card.Text>
            <Card.Title className='card-title'>Friend</Card.Title>
            <Card.Text className='card-text'>{friend}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Row>
        <Col></Col>
        <Col>
          <div className={style}>
            Prompt saved successfully! New prompt generating...
          </div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Button variant='outline-primary' onClick={saveNewPrompt}>
            Save Prompt
          </Button>
        </Col>
        <Col>
          <Button variant='outline-primary' onClick={generateRandomPrompt}>
            Generate Another Prompt (without saving)
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Link to='/'>
            <Button variant='outline-success'>Back (without saving)</Button>
          </Link>
        </Col>
        <Col>
          <Link to='/saved-prompts'>
            <Button variant='outline-info'>View Saved Prompts</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default PromptTemplate;
