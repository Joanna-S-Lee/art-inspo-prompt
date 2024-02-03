import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function PromptTemplate() {
  return (
    <div className='prompt-template'>
      <h1>
        <b>Your prompt is</b>
      </h1>
      <br />
      <Row>
        <Col>
          <div className='prompt'>Characters:</div>
          <div className='prompt'>Environment Themes:</div>
          <div className='prompt'>Accessories:</div>
          <div className='prompt'>Friends:</div>
        </Col>
        <Col></Col>
      </Row>
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
    </div>
  );
}

export default PromptTemplate;
