import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BsFillHouseGearFill } from "react-icons/bs";

import UserProfileSettings from "../../../../components/user/UserProfileSettings";
import UserAccountSettings from "../../../../components/user/UserAccountSettings";
import UserPreferencesSettings from "../../../../components/user/UserPreferencesSettings";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const isActiveTag = (tag) => {
    return activeTab === tag ? "bg-amber-300" : "hover:bg-amber-100 transition";
  };

  return (
    <div className="h-[90vh]">
      <div className="flex justify-center items-center h-full">
        <div className="h-[70%] border border-black/30 w-full grid grid-cols-[200px_1fr] rounded ">
          <div className="flex flex-col items-center border-r border-black/30 gap-3 p-3">
            <h2 className="font-semibold">User Settings</h2>
            <div
              className={`${isActiveTag(
                "profile"
              )} w-full flex gap-3 items-center self-start rounded p-1`}
              onClick={() => setActiveTab("profile")}
            >
              <FaUser />
              <button>Profile</button>
            </div>
            <div
              className={`${isActiveTag(
                "account"
              )} w-full flex gap-3 items-center self-start rounded p-1`}
              onClick={() => setActiveTab("account")}
            >
              <FaLock />
              <button>Account</button>
            </div>
            <div
              className={`${isActiveTag(
                "preferences"
              )} w-full flex gap-3 items-center self-start rounded p-1`}
              onClick={() => setActiveTab("preferences")}
            >
              <FaGear />
              <button>Preferences</button>
            </div>

            <hr className="w-[90%] text-black/20" />
            <h2 className="font-semibold">Family Settings</h2>
            <div
              className={`${isActiveTag(
                "members"
              )} w-full flex gap-3 items-center self-start rounded p-1`}
              onClick={() => setActiveTab("members")}
            >
              <FaUsers />
              <button>Members</button>
            </div>
            <div
              className={`${isActiveTag(
                "familyDetails"
              )} w-full flex gap-2 items-center self-start rounded px-1 py-2`}
              onClick={() => setActiveTab("familyDetails")}
            >
              <BsFillHouseGearFill />
              <button className="text-sm">Family Details / Theme</button>
            </div>
          </div>
          <div>
            {activeTab === "profile" && <UserProfileSettings />}
            {activeTab === "account" && <UserAccountSettings />}
            {activeTab === "preferences" && <UserPreferencesSettings />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
