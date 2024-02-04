import './App.css';
import Home from './Home';
import Import from './Import';
import PromptTemplate from './PromptTemplate';
import Footer from './fragments/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  initAccessories,
  initCharacters,
  initEnvironments,
  initFriends,
} from './Data';

initCharacters();
initEnvironments();
initAccessories();
initFriends();

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/prompt' element={<PromptTemplate />} />
            <Route path='/import-prompt' element={<Import />} />
          </Routes>
        </header>
        <div className='row'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
