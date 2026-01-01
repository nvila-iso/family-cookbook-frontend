import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import AccountDeleteModal from "../commonUI/AccountDeleteModal";

import { MdDeleteForever } from "react-icons/md";
import { FaFloppyDisk } from "react-icons/fa6";

const UserAccountSettings = () => {
  const { user, token, logout } = useAuth();
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <div className="relative">
        <div
          className={`p-3 flex flex-col justify-center items-center ${
            deleteModal ? "blur-sm" : "blur-none"
          }`}
        >
          <div className="w-lg flex justify-between items-end">
            <fieldset className="border border-amber-300 w-xs bg-white rounded-xl shadow-sm py-1">
              <legend className="text-sm text-amber-600 ml-3 font-semibold">
                Registered Email
              </legend>
              <input
                name="email"
                defaultValue={user?.email || ""}
                type="text"
                className="font-semibold pb-1 px-3 w-full focus:outline-none"
                required
              />
            </fieldset>
            {/* <button
            className="flex gap-1 justify-center items-center bg-red-300 rounded px-2 py-1 h-12 w- mx-auto"
            onClick={() => handleDeleteAccount()}
            disabled={isDeleting}
          >
            <MdDeleteForever />
            {isDeleting ? "Deleting..." : "Delete Account"}
          </button> */}
            <button
              className="flex gap-1 justify-center items-center bg-red-300 rounded px-2 py-1 h-12 w- mx-auto"
              onClick={() => setDeleteModal(true)}
            >
              <MdDeleteForever />
              Delete Account
            </button>
          </div>

          <form className="flex flex-col mt-5">
            <p className="font-semibold">Change Password</p>
            <div className="flex gap-3 justify-self-center self-center">
              <fieldset className="border border-amber-300 w-xs bg-white rounded-xl shadow-sm py-1">
                <legend className="text-sm text-amber-600 ml-3 font-semibold">
                  Password
                </legend>
                <input
                  name="passwordOne"
                  type="passwordOne"
                  className="font-semibold pb-1 px-3 w-full focus:outline-none"
                  required
                />
              </fieldset>
              <fieldset className="border border-amber-300 w-xs bg-white rounded-xl shadow-sm py-1">
                <legend className="text-sm text-amber-600 ml-3 font-semibold">
                  Repeat Password
                </legend>
                <input
                  name="passwordTwo"
                  type="password"
                  className="font-semibold pb-1 px-3 w-full focus:outline-none"
                  required
                />
              </fieldset>
            </div>
            <button
              className="self-end mt-2 group text-white font-semibold py-2 w-34 flex items-center justify-center bg-black hover:bg-black/70 transition"
              type="submit"
            >
              <p className="flex gap-1 items-center text-xl">
                <FaFloppyDisk className="group-hover:animate-bounce" /> Save
              </p>
            </button>
          </form>
        </div>
        {deleteModal && <AccountDeleteModal setDeleteModal={setDeleteModal} />}
      </div>
    </>
  );
};

export default UserAccountSettings;
