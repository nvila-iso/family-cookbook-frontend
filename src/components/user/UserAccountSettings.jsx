import CommonButton from "../commonUI/CommonButton";

import { MdDeleteForever } from "react-icons/md";

const UserAccountSettings = () => {
  return (
    <>
      <div className="p-3">
        <div className="flex gap-10">
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
            </div>
            <CommonButton
              label="Save"
              adjustments="w-28 text-center"
              variant="secondary"
            />
          </form>
          <button className="flex gap-1 justify-center items-center bg-red-300 rounded px-2 py-1 h-12">
            <MdDeleteForever />
            Delete Account
          </button>
        </div>
      </div>
    </>
  );
};

export default UserAccountSettings;
