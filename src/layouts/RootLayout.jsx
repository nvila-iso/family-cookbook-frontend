import { Outlet } from "react-router";
import Nav from "./Nav";

const RootLayout = () => {
  return (
    <>
    <div >
      <header>
        <Nav />
      </header>
      <main className="h-screen mx-auto">
        <Outlet />
      </main>
      </div>
    </>
  );
};

export default RootLayout;
