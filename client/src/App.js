// import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import PrivateUserRoute from './components/privateRoutes/privateUserRoute';
import NovelHome from './components/novelHome/NovelHome';
import AddNovel from './components/novelHome/AddNovel';
import LoginPage from './components/auth/UserLogin';
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
            <Route element={<PrivateUserRoute pageName='addNovel' />}>
              <Route exact path='/addNovel' element={<AddNovel />} />
            </Route>
            <Route element={<PrivateUserRoute pageName='updateNovel' />}>
              <Route exact path='/updateNovel' element={<AddNovel />} />
            </Route>
            <Route exact path='/login' element={<LoginPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

        </Router>
      </NState>
    </UserState>
  );
}

export default App;
