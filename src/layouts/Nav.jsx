import { Link, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

import CommonButton from "../components/commonUI/CommonButton";
import UserDropdown from "../components/user/UserDropdown";

const Nav = () => {
  const { token, user } = useAuth();
  const location = useLocation();

  return (
    <>
      <div className="flex items-center justify-between px-5 py-1 border-b border-black/10">
        <Link to="/">
          <img src="/logo.svg" alt="" className="h-14 size-40" />
        </Link>
        {!token ? (
          <div className="flex items-center gap-5 font-semibold">
            <Link to="/login" className="hover:italic transition">
              login
            </Link>
            <CommonButton label="register" adjustments="py-1" url="/register" />
          </div>
        ) : (
          <div className="flex items-center gap-5 font-semibold">
            {token &&
              location.pathname !== "/setup" &&
              user?.family === null && (
                <CommonButton
                  label="+family"
                  variant="caution"
                  adjustments="py-1"
                  url="/setup"
                />
              )}
            <UserDropdown />
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
