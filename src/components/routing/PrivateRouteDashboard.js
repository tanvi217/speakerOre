import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const PrivateRouteDashboard = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isSubscribed, role, loading } = authContext;

  return (
    <Route
      {...rest}
      render={(props) =>
        !isSubscribed && !loading && role !== 'moderator' ? (
          <Redirect to='/' />
        ) : (
          <Component {...props} />
        )
      }
    ></Route>
  );
};

export default PrivateRouteDashboard;
