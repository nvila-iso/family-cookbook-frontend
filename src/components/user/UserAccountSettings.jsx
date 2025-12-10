import CommonButton from "../commonUI/CommonButton";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router";

import { MdDeleteForever } from "react-icons/md";

const UserAccountSettings = () => {
  const { user, token, logout } = useAuth();
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    setError(null);
    setIsDeleting(true);

    try {
      const res = await fetch(`http://localhost:5000/api/users/${user.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 204) {
        logout();
        navigate("/");
        return;
      }

      const data = await res.json();
      setError(data.error || "Failed to delete account");
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="p-3 gap-x-3 grid grid-cols-2 items-center">
        <form action="">
          <fieldset className="border">
            <legend className="text-xs ml-3 font-semibold">
              Registered Email
            </legend>
            <input
              name="email"
              type="text"
              className="pb-1 px-3 w-full focus:outline-none"
              value={user.email}
              required
            />
          </fieldset>
        </form>
        <form action="">
          <p>Change Password</p>
          <div className="flex gap-3">
            <fieldset className="border">
              <legend className="text-xs ml-3 font-semibold">Password</legend>
              <input
                name="email"
                type="text"
                className="pb-1 px-3 w-full focus:outline-none"
                required
              />
            </fieldset>
            <fieldset className="border">
              <legend className="text-xs ml-3 font-semibold">
                Repeat Password
              </legend>
              <input
                name="email"
                type="text"
                className="pb-1 px-3 w-full focus:outline-none"
                required
              />
            </fieldset>
            <CommonButton
              label="Save"
              adjustments="w-28 text-center"
              variant="secondary"
            />
          </div>
        </form>
        <button
          className="flex gap-1 justify-center items-center bg-red-300 rounded px-2 py-1 h-12 w-xs mx-auto"
          onClick={() => handleDeleteAccount()}
          disabled={isDeleting}
        >
          <MdDeleteForever />
          {isDeleting ? "Deleting..." : "Delete Account"}
        </button>
      </div>
    </>
  );
};

export default UserAccountSettings;
