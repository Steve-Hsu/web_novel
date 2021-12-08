import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/userContext/userContext';
import NContext from '../../context/novelContext/nContext';
import UserLogin from '../../components/auth/UserLogin'
import { Outlet } from 'react-router';

const PrivateUserRoute = ({ pageName }) => {

  const userContext = useContext(UserContext);
  const nContext = useContext(NContext)
  const { isAuthenticated } = userContext;
  const { changePage, currentPage } = nContext;
  useEffect(() => {
    changePage(pageName)
  }, [currentPage])

  return isAuthenticated ? <Outlet /> : <UserLogin />
};

export default PrivateUserRoute;