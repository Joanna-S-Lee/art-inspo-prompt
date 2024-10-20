import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Import from './Import';
import PromptTemplate from './PromptTemplate';
import Footer from './fragments/Footer';
import SavedPrompts from './SavedPrompts';

import {
  initAccessories,
  initCharacters,
  initEnvironments,
  initFriends,
  initSavedPrompts,
} from './Data';

initCharacters();
initEnvironments();
initAccessories();
initFriends();
initSavedPrompts();

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/prompt' element={<PromptTemplate />} />
            <Route path='/import-prompt' element={<Import />} />
            <Route path='/saved-prompts' element={<SavedPrompts />} />
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
