import { useAuth } from "../../context/AuthContext";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState, useRef } from "react";
import { FaFloppyDisk } from "react-icons/fa6";
import { toast } from "react-toastify";

import CommonButton from "../commonUI/CommonButton";
import UserChangeAvatar from "./UserChangeAvatar";

const UserProfileSettings = () => {
  const fileInputRef = useRef(null);
  const { user, token, setUser } = useAuth();
  const [changePhotoPopup, setChangePhotoPopup] = useState(false);

  const deleteSuccess = () =>
    toast(
      <>
        <p className="font-semibold">
          Photo Deleted <span className="text-2xl">🗑️</span>
        </p>
      </>
    );
  const changeSuccess = () =>
    toast(<p className="font-semibold">Changes Saved!</p>);

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
      deleteSuccess();
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
      changeSuccess();
      sessionStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.error(error);
    } finally {
      e.target.value = "";
    }
  };

  const handleFormChanges = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    const body = {
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      username: fd.get("username"),
    };
    console.log(body);
    try {
      const res = await fetch(
        `http://localhost:5000/api/users/${user.id}/profile`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to update profile");
      }

      setUser((prev) => {
        const updated = { ...prev, ...data.user };
        sessionStorage.setItem("user", JSON.stringify(updated));
        return updated;
      });

      setTimeout(() => {
        changeSuccess();
        window.location.reload();
      }, 2000);
      changeSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col w-xs mx-auto py-3 items-center gap-3">
        <div className="relative">
          <div className="w-46 h-46 rounded-full bg-emerald-300 flex items-center justify-center overflow-hidden shadow-sm">
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
          <div className="absolute left-36 bottom-7 w-15 h-15 text-white bg-sky-500 rounded-full flex items-center justify-center shadow-sm hover:shadow-xs hover:bg-sky-600 hover:text-white/50 transition">
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
            adjustments={"rounded-full w-48 text-center"}
          />

          <CommonButton
            label="Delete Photo"
            variant="caution"
            adjustments="w-48 rounded-full text-center"
            onClick={() => handleDeletePhoto()}
          />
        </div>
        <form
          onSubmit={handleFormChanges}
          className="flex flex-col h-full gap-3"
        >
          <fieldset className="border border-amber-300 w-xs bg-white rounded-xl shadow-sm py-1">
            <legend className="text-sm text-amber-600 ml-3 font-semibold">
              First Name
            </legend>
            <input
              name="firstName"
              defaultValue={user?.firstName || ""}
              type="text"
              className="font-semibold pb-1 px-3 w-full focus:outline-none"
              required
            />
          </fieldset>
          <fieldset className="border border-amber-300 w-xs bg-white rounded-xl shadow-sm py-1">
            <legend className="text-sm text-amber-600 ml-3 font-semibold">
              Last Name
            </legend>
            <input
              name="lastName"
              defaultValue={user?.lastName || ""}
              type="text"
              className="font-semibold pb-1 px-3 w-full focus:outline-none"
              required
            />
          </fieldset>

          <fieldset className="border border-amber-300 w-xs bg-white rounded-xl shadow-sm py-1">
            <legend className="text-sm text-amber-600 ml-3 font-semibold">
              Username
            </legend>
            <input
              name="username"
              defaultValue={user?.username || ""}
              type="text"
              className="font-semibold pb-1 px-3 w-full focus:outline-none"
              required
            />
          </fieldset>
          {/* <CommonButton
            label="Save"
            adjustments="w-full text-center mx-auto"
            variant="secondary"
          /> */}
          <button
            className="group text-white font-semibold py-2 w-full flex items-center justify-center bg-black hover:bg-black/70 transition"
            type="submit"
          >
            <p className="flex gap-1 items-center text-xl">
              <FaFloppyDisk className="group-hover:animate-bounce" /> Save
            </p>
          </button>
        </form>
      </div>

      <div className="p-3 relative">
        <div className="flex gap-10">
          {/* <div className="relative">
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
          {/* </div>
          </div> */}

          {/* <div className="flex gap-5 justify-center items-center">
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
          </div> */}
        </div>
        {/* <form action="" className="flex flex-col h-full gap-5 mt-5">
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
        </form> */}
      </div>
    </>
  );
};

export default UserProfileSettings;
