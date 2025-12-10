import { Outlet } from "react-router";
import { useLocation } from "react-router";
import Nav from "./Nav";
import Search from "../components/commonUI/Search";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  const location = useLocation();

  const hideSearchOn = ["/login", "/register", "/setup"];

  return (
    <>
      <div>
        <header>
          <Nav />
          {!hideSearchOn.includes(location.pathname) && <Search />}
        </header>
        <main className="max-w-6xl mx-auto px-3">
          <Outlet />
          <ToastContainer position="bottom-right" closeOnClick pauseOnHover />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
