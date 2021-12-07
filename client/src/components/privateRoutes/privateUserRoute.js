import React, { useContext } from 'react';
import UserContext from '../../context/userContext/userContext';
import UserLogin from '../../components/auth/UserLogin'

const PrivateUserRoute = ({ children }) => {
  const userContext = useContext(UserContext);
  const { isAuthenticated } = userContext;
  return isAuthenticated ? children : <UserLogin />
};

export default PrivateUserRoute;