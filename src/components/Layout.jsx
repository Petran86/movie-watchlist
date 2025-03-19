import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
