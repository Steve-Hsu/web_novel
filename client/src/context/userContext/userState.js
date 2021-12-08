import { useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './userReducer';
import axios from 'axios'

//Utils
import setAuthToken from '../../utils/setAuthToken'

import {
  ADD,
  UPDATE,
  CLEAR,
} from '../types'


const UserState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    role: null,
  }
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // @Update States functions
  const logoutUser = () => dispatch({ type: CLEAR });

  // @Function with axios - which is named camelCase with underscore "_"
  const add_User = async (user) => {
    // user  needs  { name, email, password, role }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      await axios.post('/api/v1/auth/register', user, config);
      // Next should jump to login page automatically
    } catch (err) {
      // dispatch({
      //   type: USER_ERROR,
      //   payload: 'add user err',
      // });
    }
  }


  const login_User = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/v1/auth/login', formData, config);
      dispatch({
        //Get token, and the user information
        type: UPDATE,
        payload: res.data,
      });
      //@ Very important !! Set auth token to the latest token, if not, the following function may take the previous token to login
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      // loadCases();

      // const load_User = async () => {
      //   try {
      //     console.log("login successed")
      //     // const res = await axios.get('/api/v1/auth');
      //     // dispatch({ type: UPDATE, payload: res.data });
      //   } catch (err) {
      //     console.log('login failed')
      //     // dispatch({ type: USER_AUTH_ERROR });
      //   }
      // }

      // load_User();
    } catch (err) {
      // dispatch({
      //   type: USER_LOGIN_FAIL,
      //   payload: err.response.data.msg,
      // });
    }
  };


  return (
    <UserContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        role: state.role,
        logoutUser,
        add_User,
        login_User,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;