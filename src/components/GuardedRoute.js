import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({
  component: Component,
  auth,
  setPageNum,
  pageNum,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      auth === true ? (
        <Component {...props} setPageNum={setPageNum} pageNum={pageNum} />
      ) : (
        <Redirect to="/lockedcontent"/>
      )
    }
  />
);

export default GuardedRoute;
// Component
