import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

  const storage = localStorage.getItem("@churras-auth")
  const  signed = storage ? storage : false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Route
      {...rest}
      render={props => (
        <Component {...props} />
      )}
    />
  );
}