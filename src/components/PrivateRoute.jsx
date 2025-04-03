import { useLocation, Navigate, Outlet } from "react-router";

export default function PrivateRoute({ user }) {
  const location = useLocation();

  if (!user) {
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
