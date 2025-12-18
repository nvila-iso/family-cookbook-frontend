import { useState } from "react";
import { useLocation } from "react-router";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BsFillHouseGearFill } from "react-icons/bs";

import UserProfileSettings from "../../../../components/user/UserProfileSettings";
import UserAccountSettings from "../../../../components/user/UserAccountSettings";
import UserPreferencesSettings from "../../../../components/user/UserPreferencesSettings";
import FamilyMembersSettings from "../../../../components/family/FamilyMembersSettings";
import FamilyDetailsSettings from "../../../../components/family/FamilyDetailsSettings";

const Settings = () => {
  const { state } = useLocation();
  const initialTab = state?.activeTab || "profile";

  const [activeTab, setActiveTab] = useState(initialTab);

  const isActiveTag = (tag) => {
    return activeTab === tag ? "bg-amber-300" : "hover:bg-amber-100 transition";
  };

  return (
    <div className="h-[90vh]">
      <div className="fade-in flex justify-center items-center h-full">
        <div className="h-[80%] border w-full grid grid-cols-[200px_1fr] rounded bg-amber-100/20 border-amber-400 shadow-sm">
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
                "details"
              )} w-full flex gap-2 items-center self-start rounded px-1 py-2`}
              onClick={() => setActiveTab("details")}
            >
              <BsFillHouseGearFill />
              <button className="text-sm">Family Details / Theme</button>
            </div>
            <div
              className={`${isActiveTag(
                "members"
              )} w-full flex gap-3 items-center self-start rounded p-1`}
              onClick={() => setActiveTab("members")}
            >
              <FaUsers />
              <button>Members</button>
            </div>
          </div>
          <div>
            {activeTab === "profile" && <UserProfileSettings />}
            {activeTab === "account" && <UserAccountSettings />}
            {activeTab === "preferences" && <UserPreferencesSettings />}
            {activeTab === "members" && <FamilyMembersSettings />}
            {activeTab === "details" && <FamilyDetailsSettings />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
