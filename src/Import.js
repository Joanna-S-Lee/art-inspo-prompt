import { Link } from 'react-router-dom';
import { Button, Form, Row, Col, Dropdown } from 'react-bootstrap';
import { useState } from 'react';

import {
  CHARACTERS_KEY,
  ENVIRONMENTS_KEY,
  ACCESSORIES_KEY,
  FRIENDS_KEY,
} from './Data';

function Import() {
  const [charactersArr, setCharactersArr] = useState(
    JSON.parse(localStorage.getItem(CHARACTERS_KEY))
  );

  const [environmentsArr, setEnvironmentsArr] = useState(
    JSON.parse(localStorage.getItem(ENVIRONMENTS_KEY))
  );

  const [accessoriesArr, setAccessoriesArr] = useState(
    JSON.parse(localStorage.getItem(ACCESSORIES_KEY))
  );

  const [friendsArr, setFriendsArr] = useState(
    JSON.parse(localStorage.getItem(FRIENDS_KEY))
  );

  function handleSubmit() {}
  return (
    <div>
      <h1>Import Prompt</h1>
      <br />
      <Row>Which Category would you like to add a new prompt to?</Row>
      <br />
      <Row>
        <Form className='import-form'>
          <br />
          <Row>
            <Dropdown>
              <Dropdown.Toggle variant='outline-success'>
                Pick a Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Characters</Dropdown.Item>
                <Dropdown.Item>Environments</Dropdown.Item>
                <Dropdown.Item>Acccessories</Dropdown.Item>
                <Dropdown.Item>Friends</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <br />
          <Row>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Prompt</Form.Label>
              <Col>
                <Form.Control />
              </Col>
            </Form.Group>
          </Row>
          <br />
          <Row>
            <Col>
              <Button variant='outline-primary' type='submit' size='lg'>
                Submit
              </Button>
            </Col>
            <Col>
              <Link to='/'>
                <Button variant='outline-primary' size='lg'>
                  Cancel
                </Button>
              </Link>
            </Col>
          </Row>
          <br />
        </Form>
      </Row>
      <br />
    </div>
  );
}

export default Import;
