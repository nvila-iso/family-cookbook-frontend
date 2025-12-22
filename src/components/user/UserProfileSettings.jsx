import { useAuth } from "../../context/AuthContext";
import { FaCameraRetro } from "react-icons/fa";
import { useState, useRef } from "react";

import CommonButton from "../commonUI/CommonButton";
import UserChangeAvatar from "./UserChangeAvatar";

const UserProfileSettings = () => {
  const fileInputRef = useRef(null);
  const { user, token, setUser } = useAuth();
  const [changePhotoPopup, setChangePhotoPopup] = useState(false);

  const handleDeletePhoto = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/avatar`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to delete avatar");
      }

      setUser(data.user);
      sessionStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const handleAvatarSelected = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fd = new FormData();
    fd.append("avatar", file);

    try {
      const res = await fetch("http://localhost:5000/api/users/avatar", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to upload avatar");
      }

      setUser(data.user);
      sessionStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.error(error);
    } finally {
      e.target.value = "";
    }
  };

  return (
    <>
      <div className="p-3 relative">
        <div className="flex gap-10">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-emerald-300 flex items-center justify-center overflow-hidden shadow-sm">
              {!user?.avatarUrl ? (
                <>
                  <p className="text-emerald-800 text-4xl font-bold">
                    {user?.firstName?.[0]?.toUpperCase() || "U"}
                  </p>
                </>
              ) : (
                <>
                  <img
                    src={`http://localhost:5000${user?.avatarUrl}`}
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </>
              )}
            </div>
            <div className="absolute left-17 bottom-1 w-10 h-10 text-white bg-sky-500 rounded-full flex items-center justify-center shadow-sm hover:shadow-xs hover:bg-sky-600 hover:text-white/50 transition">
              <FaCameraRetro className=" text-lg border-2" />
              {/* --> this button to open webcam / phone cam */}
            </div>
          </div>

          <div className="flex gap-5 justify-center items-center">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleAvatarSelected}
            />
            <CommonButton
              label="Change Photo"
              onClick={() => fileInputRef.current.click()}
            />
            <CommonButton
              label="Delete Photo"
              variant="caution"
              adjustments=""
              onClick={() => handleDeletePhoto()}
            />
          </div>
        </div>
        <form action="" className="flex flex-col h-full gap-5 mt-5">
          <div className="flex gap-3">
            <fieldset className="border w-xs">
              <legend className="text-xs ml-3 font-semibold">First Name</legend>
              <input
                name="firstName"
                value={user?.firstName || ""}
                type="text"
                className="pb-1 px-3 w-full focus:outline-none"
                required
              />
            </fieldset>

            <fieldset className="border w-xs">
              <legend className="text-xs ml-3 font-semibold">Last Name</legend>
              <input
                name="lastName"
                value={user?.lastName || ""}
                type="text"
                className="pb-1 px-3 w-full focus:outline-none"
                required
              />
            </fieldset>
          </div>

          <fieldset className="border w-xs">
            <legend className="text-xs ml-3 font-semibold">Username</legend>
            <input
              name="username"
              value={user?.username || ""}
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
        </form>
      </div>
    </>
  );
};

export default UserProfileSettings;
