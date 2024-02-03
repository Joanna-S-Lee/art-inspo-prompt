import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p>Hello, Welcome to Prompt Maker!</p>
      <Row>
        <Col>
          <Link to='/prompt'>
            <Button variant='outline-primary'>Generate Prompt</Button>
          </Link>
        </Col>
        <Col>
          <Link to='/import-prompt'>
            <Button variant='outline-primary' style={{ whiteSpace: 'nowrap' }}>
              Import More Prompts
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
