// import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import NovelHome from './components/novelHome/NovelHome';
import NotFound from './components/NotFound'

// Context
import NState from './context/novelContext/nState';

function App() {
  return (
    <NState>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<NovelHome />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </NState>
  );
}

export default App;
