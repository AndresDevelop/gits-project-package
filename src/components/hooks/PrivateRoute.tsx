import React from "react";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
interface PrivateRouteProps {
  isUserAuthorized: boolean;
}

const PrivateRoute = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & PrivateRouteProps> => ({
  isUserAuthorized,
  ...args
}: PrivateRouteProps) => {
  return !isUserAuthorized ? (
    <Alert severity="error">
      This is an error alert — check it out!
      <Link to="/">Please log in</Link>
    </Alert>
  ) : (
    <WrappedComponent {...(args as P)} />
  );
};

export default PrivateRoute;
