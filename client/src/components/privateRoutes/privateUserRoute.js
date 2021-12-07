import React, { useContext } from 'react';
import UserContext from '../../context/userContext/userContext';
import UserLogin from '../../components/auth/UserLogin'
import { Outlet } from 'react-router';

const PrivateUserRoute = () => {
  const userContext = useContext(UserContext);
  const { isAuthenticated } = userContext;
  return isAuthenticated ? <Outlet /> : <UserLogin />
};

export default PrivateUserRoute;