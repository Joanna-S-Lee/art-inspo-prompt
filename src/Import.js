import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

function Import() {
  return (
    <div>
      <h1>Import Prompt</h1>
      <br />
      <Form style={{ textAlign: 'start' }}>
        <Form.Group controlId='formCharacter'>
          <Row>
            <Col sm='5'>
              <Form.Label>Character</Form.Label>
            </Col>
            <Col sm='7'>
              <Form.Control type='text' />
            </Col>
          </Row>
        </Form.Group>
        <br />
        <Form.Group controlId='formEnvironment'>
          <Row>
            <Col sm='5'>
              <Form.Label>Environment </Form.Label>
            </Col>
            <Col sm='7'>
              <Form.Control type='text' />
            </Col>
          </Row>
        </Form.Group>
        <br />
        <Form.Group controlId='formAccessory'>
          <Row>
            <Col sm='5'>
              <Form.Label>Accessory</Form.Label>
            </Col>
            <Col sm='7'>
              <Form.Control type='text' />
            </Col>
          </Row>
        </Form.Group>
        <br />
        <Form.Group controlId='formFriend'>
          <Row>
            <Col sm='5'>
              <Form.Label>Friend</Form.Label>
            </Col>
            <Col sm='7'>
              <Form.Control type='text' />
            </Col>
          </Row>
        </Form.Group>
        <br />
        <Row>
          <Col sm='4'></Col>
          <Col>
            <Button variant='outline-primary' type='submit' size='lg'>
              Submit
            </Button>
          </Col>
          <Col>
            <Button variant='outline-primary' size='lg'>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Import;
