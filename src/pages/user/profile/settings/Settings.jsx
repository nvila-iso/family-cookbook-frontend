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
    return activeTab === tag
      ? "bg-amber-300 text-amber-700 shadow-sm"
      : "text-black/60 hover:bg-amber-100 hover:text-amber-500 cursor-pointer transition";
  };

  return (
    <div className="fade-in py-5 w-full grid grid-cols-[25%_1fr] h-screen gap-x-5 mx-auto">
      <div className="h-[60vh] p-2 border rounded-3xl bg-amber-100/20 border-amber-200 shadow-sm">
        <div className="flex flex-col items-center gap-3 p-3 border-2 border-dashed border-amber-200 rounded-2xl h-full">
          <h2 className="font-semibold text-amber-800">User Settings</h2>
          <div
            className={`group w-full flex gap-3 items-center self-start rounded-full px-3 py-2 ${isActiveTag(
              "profile"
            )}`}
            onClick={() => setActiveTab("profile")}
          >
            <FaUser className="" />
            <button>Profile</button>
          </div>
          <div
            className={` w-full flex gap-3 items-center self-start rounded-full px-3 py-2  ${isActiveTag(
              "account"
            )}`}
            onClick={() => setActiveTab("account")}
          >
            <FaLock />
            <button>Account</button>
          </div>
          <div
            className={`w-full flex gap-3 items-center self-start rounded-full px-3 py-2  ${isActiveTag(
              "preferences"
            )}`}
            onClick={() => setActiveTab("preferences")}
          >
            <FaGear />
            <button>Preferences</button>
          </div>

          <hr className="w-[90%] text-amber-300 shadow-xs" />
          <h2 className="font-semibold text-amber-800">Family Settings</h2>
          <div
            className={` w-full flex gap-2 items-center self-start rounded-full px-3 py-3  ${isActiveTag(
              "details"
            )}`}
            onClick={() => setActiveTab("details")}
          >
            <BsFillHouseGearFill />
            <button className="text-sm">Family Details / Theme</button>
          </div>
          <div
            className={` w-full flex gap-3 items-center self-start rounded-full px-3 py-2  ${isActiveTag(
              "members"
            )}`}
            onClick={() => setActiveTab("members")}
          >
            <FaUsers />
            <button>Members</button>
          </div>
        </div>
      </div>
      <div className="h-[60vh] p-2 border rounded-3xl bg-amber-100/20 border-amber-200 shadow-sm">
        <div className="border-2 border-dashed border-amber-200 rounded-2xl h-full">
          {activeTab === "profile" && <UserProfileSettings />}
          {activeTab === "account" && <UserAccountSettings />}
          {activeTab === "preferences" && <UserPreferencesSettings />}
          {activeTab === "members" && <FamilyMembersSettings />}
          {activeTab === "details" && <FamilyDetailsSettings />}
        </div>
      </div>
      {/* <div className="fade-in flex justify-center items-center h-full">
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
      </div> */}
    </div>
  );
};

export default Settings;
