import { Outlet } from "react-router";
import Nav from "../components/Nav";

function AppLayout() {
  return (
    <div className="max-w-4/5 m-auto relative  min-h-screen">
      <Nav />
      <main className="bg-gray-800 h-screen md:h-[90vh]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
