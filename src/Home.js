import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
  return (
    <div>
      <p>Hello, Welcome to Prompt Maker!</p>
      <Row>
        <Col>
          <Button variant='outline-primary'>Generate Prompt</Button>
        </Col>
        <Col>
          <Button variant='outline-primary' style={{ whiteSpace: 'nowrap' }}>
            Import More Prompts
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
