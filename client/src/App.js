import { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

// Components
import PrivateUserRoute from './components/privateRoutes/privateUserRoute';
import NovelHome from './components/novelHome/NovelHome';
import AddNovel from './components/novelHome/AddNovel';
import LoginPage from './components/auth/UserLogin';
import NotFound from './components/NotFound'

// Global Header for token
import setAuthToken from './utils/setAuthToken'

// Context - State
import UserState from './context/userContext/userState'
import NState from './context/novelContext/nState';

if (localStorage.token) {
  // setAuthToken(localStorage.token);
}


function App() {
  // const userContext = useContext(UserContext);
  // const { isAuthenticated } = userContext;

  return (
    <UserState>
      <NState>
        <Router>

          <Routes>
            {/* public Route */}
            <Route exact path='/' element={<NovelHome />} />

            {/* <Route exact path='/login' >
              {!isAuthenticated ? <Navigator /> : <NovelHome />}
            </Route> */}
            {/* private Route */}
            <Route element={<PrivateUserRoute pageName='addNovel' />}>
              <Route exact path='/addNovel' element={<AddNovel />} />
            </Route>
            <Route element={<PrivateUserRoute pageName='updateNovel' />}>
              <Route exact path='/updateNovel' element={<AddNovel />} />
            </Route>
            <Route exact path='/login' element={<LoginPage loginTo={'home'} />} />
            <Route path='*' element={<Navigate to='/' />} />

          </Routes>

        </Router>
      </NState>
    </UserState>
  );
}

export default App;
