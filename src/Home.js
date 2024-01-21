import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div>
      <p>Hello, Welcome to Prompt Maker!</p>
      <Button variant='outline-primary'>Generate Prompt</Button>
      <Button variant='outline-primary'>Import More Prompts</Button>
    </div>
  );
};

export default Home;
