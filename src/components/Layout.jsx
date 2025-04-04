import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout({ user, logoutUser }) {
  return (
    <div className="container">
      <Header user={user} logoutUser={logoutUser} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
