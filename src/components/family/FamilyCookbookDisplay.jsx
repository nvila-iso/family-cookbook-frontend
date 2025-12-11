import CommonButton from "../commonUI/CommonButton";
import { IoGridSharp } from "react-icons/io5";
import { PiListLight } from "react-icons/pi";

const FamilyCookbookDisplay = ({ family }) => {
  return (
    <>
      <div className="border border-black/30 rounded p-2">
        <div className="flex justify-between">
          {/* FILTERS */}
          <div className="flex gap-5">
            <select
              name=""
              id=""
              className="text-sm w-32 bg-zinc-100 text-center py-2 text-zinc-500 hover:text-zinc-700 font-semibold rounded"
            >
              <option value="">All Members</option>
              {family?.members?.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.username}
                </option>
              ))}
            </select>
            <select
              name=""
              id=""
              className="text-sm w-32 bg-zinc-100 text-center py-2 text-zinc-500 hover:text-zinc-700 font-semibold rounded"
            >
              <option value="">All Recipes</option>
            </select>
            <CommonButton
              label="+ Add Recipe"
              variant="new"
              adjustments="py-2"
            />
          </div>
          {/* DISPLAY TOGGLE */}
          <div className="flex justify-center items-center px-3 bg-zinc-100 text-xl gap-2 rounded">
            <IoGridSharp className="text-teal-500" />
            <div className="w-[1px] h-[50%] bg-black"></div>
            <PiListLight className="text-black/30 hover:text-black" />
          </div>
        </div>

        {/* ACTUAL DISPLAY */}
        <div className="flex flex-col justify-center items-center h-full"></div>
      </div>
    </>
  );
};

export default FamilyCookbookDisplay;
