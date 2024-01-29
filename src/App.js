import './App.css';
import Home from './Home';
import Footer from './fragments/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/prompt' element={<Home />} />
        </Routes>
        <header className='App-header'>
          <Home />
        </header>
        <div className='row'>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
