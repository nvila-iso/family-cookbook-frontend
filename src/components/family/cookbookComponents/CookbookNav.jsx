import CommonButton from "../../commonUI/CommonButton";
import { IoGridSharp } from "react-icons/io5";
import { PiListLight } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";

const CookbookNav = ({ family }) => {
  const recipeType = ["Breakfast", "Lunch", "Dinner", "Snacks", "Other"];
  return (
    <>
      <div className="flex justify-between">
        {/* FILTERS */}
        <div className="flex gap-5">
          <select
            name=""
            id=""
            className="border border-sky-300 text-sm w-40 bg-sky-100 text-center py-2 text-sky-700 hover:text-zinc-700 font-semibold rounded-full shadow-sm transition"
          >
            <option value="">🎉 All Members</option>
            {family?.members?.map((m) => (
              <option key={m.id} value={m.id}>
                {m.username}
              </option>
            ))}
          </select>
          <select
            name=""
            id=""
            className="border border-amber-500 text-sm w-40 bg-amber-200 text-center py-2 text-amber-700 hover:text-zinc-700 font-semibold rounded-full shadow-sm transition"
          >
            <option value="">📜 All Recipes</option>
            {recipeType.map((t, i) => (
              <option key={i}>{t}</option>
            ))}
          </select>
          <input
            type="text"
            className="border border-black/20 text-sm rounded-full w-60 py-2 px-3 bg-white shadow-sm font-semibold"
            placeholder="🔍 Search Recipes..."
          />
          {/* <CommonButton
            label="+ Add Recipe"
            variant="new"
            adjustments="py-2"
            url="/create"
          /> */}
        </div>
        {/* DISPLAY TOGGLE */}
        <div className="border border-purple-300 flex justify-center items-center px-3 bg-purple-200 text-xl gap-2 rounded-full shadow-sm">
          <IoGridSharp className="text-teal-500" />
          <div className="w-[1px] h-[50%] bg-black"></div>
          <PiListLight className="text-black/30 hover:text-black" />
        </div>
      </div>
    </>
  );
};

export default CookbookNav;
