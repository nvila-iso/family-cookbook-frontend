import CommonButton from "../commonUI/CommonButton";
import { IoGridSharp } from "react-icons/io5";
import { PiListLight } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { BiBowlRice } from "react-icons/bi";

const FamilyCookbookDisplay = ({ family }) => {
  console.log(family);
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
              url="/create"
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
        <div className="flex flex-col justify-center items-center h-full">
          <div className="w-52 h-60 border border-black/10 shadow-xs rounded-lg p-2 flex flex-col gap-1 hover:shadow-md transition">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/lentil-soup-recipe-2-677c54158ad10.jpg?crop=0.6667718689179948xw:1xh;center,top&resize=1200:*"
              alt=""
              className="h-32 w-full rounded-lg object-cover"
            />
            <div className="text-xs flex justify-between">
              <div className="flex gap-1 items-center">
                <FaRegClock />
                <p>30 min</p>
              </div>
              <div className="flex gap-1 items-center">
                <BiBowlRice />
                <p>4 Servings</p>
              </div>
            </div>
            <p className="font-bold text-lg text-zinc-600">Lentil Soup</p>
            <p className="text-xs text-zinc-500">Good soup, good poop.</p>
            <div className="flex flex-1 justify-between items-center text-xs">
              <p>added by </p>
              <div className="flex gap-1 items-center">
                <FaRegHeart />
                <p className="text-zinc-600">102</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyCookbookDisplay;
