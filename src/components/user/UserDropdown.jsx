import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import useClickOutside from "../../hooks/useClickOutside";

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  if (!user) return null;
  useClickOutside(dropdownRef, () => setOpen(false));

  return (
    <div>
      <button
        className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-sm font-bold">
          {user?.firstName?.[0]?.toUpperCase() || "U"}
        </span>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-40 bg-white shadow-sm rounded-md overflow-hidden"
          ref={dropdownRef}
        >
          <button
            onClick={() => navigate(`/family/${user.family.slug}`)}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Family Cookbook
          </button>
          <button
            onClick={() => navigate("/settings")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Settings
          </button>
          <button
            onClick={logout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
