import { Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SAVEDPROMPTS_KEY } from './Data';
import { useState } from 'react';

function SavedPrompts() {
  const [existingSavedPrompts, setExistingSavedPrompts] = useState(
    JSON.parse(localStorage.getItem(SAVEDPROMPTS_KEY) || [])
  );

  console.log(existingSavedPrompts);

  function handleDelete(index) {
    const updatedPrompts = [...existingSavedPrompts];

    // deletes element at specific index
    updatedPrompts.splice(index, 1);

    // update state of array after deletion
    setExistingSavedPrompts(updatedPrompts);

    // update localStorage with updated array
    localStorage.setItem(SAVEDPROMPTS_KEY, JSON.stringify(updatedPrompts));
  }

  return (
    <div>
      <h1>Saved Prompts</h1>
      <br />
      <h4>You have {existingSavedPrompts.length} prompt(s)</h4>
      <br />
      {existingSavedPrompts.map((item, index) => (
        <Row>
          <Col>
            <Card
              border='success'
              style={{
                width: '100%',
                backgroundColor: '#212529',
              }}
            >
              <Card.Header style={{ color: '#85BAA1' }}>
                Prompt #{index + 1}
              </Card.Header>
              <Card.Body>
                <Card.Title className='card-title'>Character</Card.Title>
                <Card.Text className='card-text'>{item.character}</Card.Text>
                <Card.Title className='card-title'>Environment</Card.Title>
                <Card.Text className='card-text'>{item.environment}</Card.Text>
                <Card.Title className='card-title'>Accessory</Card.Title>
                <Card.Text className='card-text'>{item.accessory}</Card.Text>
                <Card.Title className='card-title'>Friend</Card.Title>
                <Card.Text className='card-text'>{item.friend}</Card.Text>
                <Button
                  variant='outline-danger'
                  onClick={() => handleDelete(index)}
                >
                  DELETE
                </Button>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
      ))}
      <br />
      <Row>
        <Link to='/'>
          <Button variant='outline-success' size='lg'>
            Back
          </Button>
        </Link>
      </Row>
    </div>
  );
}

export default SavedPrompts;