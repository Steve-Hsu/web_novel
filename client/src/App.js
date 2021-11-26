// import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import NovelHome from './components/novel/NovelHome';
import NovelReader from './components/novel/NovelReader';
import NotFound from './components/NotFound'

// Context
import NState from './context/novelContext/nState';

function App() {
  return (
    <NState>
      <Router>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<NovelHome />} />
            <Route exact path='/api/v1/novels' element={<NovelReader />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </NState>
  );
}

export default App;
