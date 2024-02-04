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
      <br />
      <Row>
        <Link to='/saved-prompts'>
          <Button variant='outline-info'>View Saved Prompts</Button>
        </Link>
      </Row>
    </div>
  );
};

export default Home;
