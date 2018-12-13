import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from './authService.js';


function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          authService.isAuthenticated() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/Login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

export { PrivateRoute }