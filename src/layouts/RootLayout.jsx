import { Outlet } from "react-router";
import Nav from "./Nav";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <>
      <div>
        <header>
          <Nav />
        </header>
        <main className="max-h-6xl h-screen mx-auto">
          <Outlet />
          <ToastContainer position="bottom-right" closeOnClick pauseOnHover />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
