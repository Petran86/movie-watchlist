import { useLocation, Navigate, Outlet } from "react-router";

export default function PrivateRoute({ isLoggedIn }) {
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must log in first!", from: location }}
        replace
      />
    );
  }
  return <Outlet />;
}
