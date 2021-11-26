import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NovelHome from './components/novel/NovelHome';
import NovelReader from './components/novel/NovelReader';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<NovelHome />} />
          <Route exact path='/api/v1/novels' element={<NovelReader />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
