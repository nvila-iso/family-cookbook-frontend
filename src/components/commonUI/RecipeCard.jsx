import { FaRegHeart } from "react-icons/fa";
import { PiKnife } from "react-icons/pi";
import { MdDinnerDining } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { PiCookingPot } from "react-icons/pi";
import { PiBowlFood } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  const normalizeDate = new Date(recipe.createdAt).toLocaleDateString();
  console.log(recipe);

  return (
    <>
      <div className="flex flex-col rounded-xl shadow-sm w-full h-68">
        <div className="pl-2 py-3 font-semibold text-lg text-zinc-600 flex items-center gap-1">
          <p>{recipe.title}</p>
          <p className="text-xs">
            <FaPencilAlt />
          </p>
        </div>
        {/* RECIPE TITLE */}
        {/* <div className="py-2 flex items-center text-lg font-semibold ml-5">
          <p></p>
        </div> */}
        <div className="relative">
          <div className="w-18 h-18 rounded-full shadow-sm absolute bg-black left-42 bottom-22 border-4 border-white">
            <img src="" alt="" className="object-cover" />
          </div>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/lentil-soup-recipe-2-677c54158ad10.jpg?crop=0.6667718689179948xw:1xh;center,top&resize=1200:*"
            alt=""
            className="h-30 w-full object-cover"
          />
        </div>
        {/* <p className="font-semibold italic px-2">{recipe.title}</p> */}
        <div className="flex justify-between px-3 items-center"></div>
        <div className="px-2">
          <div className="text-sm flex justify-between border p-2 rounded-full border-black/5 w-full mx-auto">
            {/* <div className="bg-green-200 w-22 h-6 rounded-full flex gap-1 justify-center items-center">
              <MdDinnerDining className="text-green-700" />
              <p className="text-green-700 text-sm font-semibold">Dinner</p>
            </div> */}
            <div className="flex gap-1 items-center">
              <PiKnife />
              <p>
                {recipe.prepTime.value} {recipe.prepTime.unit}
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <PiCookingPot />
              <p>
                {recipe.cookTime.value} {recipe.cookTime.unit}
              </p>
            </div>

            <div className="flex gap-1 items-center">
              <PiBowlFood />
              <p>{recipe.servings}</p>
            </div>
          </div>
        </div>

        <div className="px-2 text-sm flex flex-1 justify-between items-center">
          <p className="text-xs text-zinc-600">{normalizeDate}</p>
          {/* <div className="flex gap-1 items-center">
            <FaRegHeart />
            <p>123</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
