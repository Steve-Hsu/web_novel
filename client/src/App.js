// import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import PrivateUserRoute from './components/privateRoutes/privateUserRoute';
import NovelHome from './components/novelHome/NovelHome';
import AddNovel from './components/novelHome/AddNovel'
import NotFound from './components/NotFound'



// Context
import UserState from './context/userContext/userState'
import NState from './context/novelContext/nState';

function App() {
  return (
    <UserState>
      <NState>
        <Router>

          <Routes>
            <Route exact path='/' element={<NovelHome />} />
            <Route element={<PrivateUserRoute />}>
              <Route exact path='/addNovel' element={<AddNovel page='addNovel' />} />
            </Route>
            <Route element={<PrivateUserRoute />}>
              <Route exact path='/updateNovel' element={<AddNovel page='updateNovel' />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>

        </Router>
      </NState>
    </UserState>
  );
}

export default App;
