import { Route, Navigate } from 'react-router-dom';

interface IPrivateRouteProps {
  isAuthenticated: boolean;
  Component: React.ReactNode;
}

const PrivateRoute = ({
  isAuthenticated,
  Component,
}: IPrivateRouteProps) => {
  return isAuthenticated ? <>{Component}</> : <Navigate to='/login' />
};

export default PrivateRoute;
