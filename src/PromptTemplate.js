import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

function PromptTemplate() {
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
            <Card.Text className='card-text'>(insert Character)</Card.Text>
            <Card.Title className='card-title'>Environment</Card.Title>
            <Card.Text className='card-text'>(insert Environment)</Card.Text>
            <Card.Title className='card-title'>Accessory</Card.Title>
            <Card.Text className='card-text'>(insert Accesory)</Card.Text>
            <Card.Title className='card-title'>Friend</Card.Title>
            <Card.Text className='card-text'>(insert Friend)</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <br />
      <Row>
        <Col>
          <Button variant='outline-primary'>Save Prompt</Button>
        </Col>
        <Col>
          <Button variant='outline-primary'>
            Generate Another Prompt (without saving)
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Button variant='outline-success'>Back (without saving)</Button>
        </Col>
      </Row>
    </div>
  );
}

export default PromptTemplate;
