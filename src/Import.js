import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { SAVEDPROMPTS_KEY } from './Data';
import { useState } from 'react';

function Import() {
  const [existingSavedPrompts, setExistingSavedPrompts] = useState(
    JSON.parse(localStorage.getItem(SAVEDPROMPTS_KEY) || [])
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
