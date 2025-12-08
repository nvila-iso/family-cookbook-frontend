import { useAuth } from "../../context/AuthContext";
import { FaCameraRetro } from "react-icons/fa";

import CommonButton from "../commonUI/CommonButton";

const UserProfileSettings = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="p-3">
        <div className="flex gap-10">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-black/30 flex items-center justify-center">
              <p className="text-4xl font-bold">
                {user?.firstName?.[0]?.toUpperCase() || "U"}
              </p>
            </div>
            <div className="absolute left-17 bottom-1 w-10 h-10 text-white bg-sky-500 rounded-full flex items-center justify-center shadow-sm hover:shadow-xs hover:bg-sky-600 hover:text-white/50 transition">
              <FaCameraRetro className=" text-lg border-2" />
            </div>
          </div>

          <div className="flex gap-5 justify-center items-center">
            <CommonButton label="Change Photo" />
            <CommonButton
              label="Delete Photo"
              variant="caution"
              adjustments=""
            />
          </div>
        </div>
        <form action="" className="flex flex-col h-full gap-5 mt-5">
          <div className="flex gap-3">
            <fieldset className="border w-xs">
              <legend className="text-xs ml-3 font-semibold">First Name</legend>
              <input
                name="firstName"
                value={user?.firstName}
                type="text"
                className="pb-1 px-3 w-full focus:outline-none"
                required
              />
            </fieldset>

            <fieldset className="border w-xs">
              <legend className="text-xs ml-3 font-semibold">Last Name</legend>
              <input
                name="lastName"
                value={user?.lastName}
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
              value={user?.username}
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
