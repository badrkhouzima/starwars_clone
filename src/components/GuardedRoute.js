import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: ShipCards, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth === true ? <ShipCards {...props} /> : <Redirect to="/home" />
    }
  />
);

export default GuardedRoute;
// Component
