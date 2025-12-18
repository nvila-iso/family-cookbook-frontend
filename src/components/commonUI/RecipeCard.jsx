import { FaRegHeart } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const RecipeCard = () => {
  return (
    <>
      <div className="flex flex-col rounded-xl shadow-sm w-74 h-68">
        {/* RECIPE TITLE */}
        <div className="h-10 flex items-center text-lg font-semibold ml-5">
          <p>Mom's Chicken</p>
        </div>
        <div className="relative">
          <div className="w-18 h-18 rounded-full shadow-sm absolute bg-black left-50 -top-9 border-4 border-white">
            <img src="" alt="" className="object-cover" />
          </div>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/lentil-soup-recipe-2-677c54158ad10.jpg?crop=0.6667718689179948xw:1xh;center,top&resize=1200:*"
            alt=""
            className="h-32 w-full object-cover border-t-2 border-b-2 border-dashed border-amber-800/20"
          />
        </div>

        <div className="flex justify-between px-3 items-center">
          <p className="font-semibold italic text-lg">Mom's famous chicken</p>
          <div className="flex gap-1 items-center">
            <FaRegClock />
            <p>30 min.</p>
          </div>
        </div>

        <div className="flex justify-between border py-2 px-1 rounded-full border-black/5 w-[94%] mx-auto">
          <div className="bg-green-200 w-22 h-6 rounded-full flex gap-1 justify-center items-center">
            <MdDinnerDining className="text-green-700" />
            <p className="text-green-700 text-sm font-semibold">Dinner</p>
          </div>
        </div>

        <div className="px-2 text-sm flex flex-1 justify-between items-center">
          <p>added: </p>
          <div className="flex gap-1 items-center">
            <FaRegHeart />
            <p>123</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
