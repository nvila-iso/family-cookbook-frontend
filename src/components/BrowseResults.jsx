import { Link } from "react-router";

import { PiBowlFoodFill } from "react-icons/pi";
import { PiKnifeFill } from "react-icons/pi";
import { PiCookingPotFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const BrowseResults = () => {
  return (
    <>
      <div className="flex mt-10">
        <div className="rounded-lg ml-10 h-94 w-64 flex flex-col border-1 border-black/20 shadow-sm">
          <div id="food-cover" className="h-34">
            <img
              src="https://www.marthastewart.com/thmb/aVMX2qtJCGCxLa9nU18qYy9NpOw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cacio-e-pepe-opener-mld109436_horiz-1222-425e28fdf7d4403abe05b1f6ab24d106.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="flex gap-1 items-center relative bottom-32 left-2">
              <FaHeart className="text-red-500" />
              <p className="font-semibold">123</p>
            </div>
            <FaBookmark className="relative bottom-41 left-50 text-3xl text-amber-500" />
          </div>
          <p className="text-center font-semibold text-xl mb-1">Spaghetti</p>
          <div className="mx-auto py-1 flex justify-evenly border-t border-b w-[90%] border-black/30">
            <div className="flex gap-1 items-center">
              <PiBowlFoodFill />
              <p>2</p>
            </div>
            <div className="flex gap-1 items-center">
              <PiKnifeFill />
              <p>2</p>
            </div>
            <div className="flex gap-1 items-center">
              <PiCookingPotFill />
              <p>2</p>
            </div>
          </div>
          <div className="px-3 text-sm">
            <p>
              This is a light summary on the recipe. Nothing to much but a
              preview of maybe what the user had written about it.
            </p>
          </div>
          <Link
            to="/family_cookbook"
            className="mt-3 text-center mx-auto w-[80%] bg-lime-500 px-2 py-1 rounded shadow-md font-semibold hover:bg-lime-600 hover:shadow-sm transition"
          >
            View Recipe
          </Link>

          <div className="flex flex-1 gap-2 items-center px-3">
            <img src="" alt="" className="h-5 w-5 rounded-full bg-black" />
            <div className="flex items-center gap-1">
              <p className="font-semibold">created by:</p>
              <Link className="underline italic">nick v.</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseResults;
