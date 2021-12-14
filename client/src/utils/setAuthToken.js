import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    // axios.defaults.headers.common['x-auth-token'] = token;
    axios.defaults.headers.common['authorization'] = `Haruki ${token}`;
  } else {
    // delete axios.defaults.headers.common['x-auth-token'];
    delete axios.defaults.headers.common['authorization'];
  }
};

export default setAuthToken;
