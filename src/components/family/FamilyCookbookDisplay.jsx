import AddRecipeCard from "../commonUI/AddRecipeCard";
import CommonButton from "../commonUI/CommonButton";

import RecipeCard from "../commonUI/RecipeCard";
import CookbookNav from "./cookbookComponents/CookbookNav";

const FamilyCookbookDisplay = ({ family }) => {
  return (
    <>
      <div className="border rounded-2xl p-2 h-[80vh] bg-amber-100/20 border-amber-200 shadow-sm">
        <div className="p-3 flex h-full flex-col border border-2 border-dashed border-amber-300 rounded-xl">
          <CookbookNav family={family} />

          {/* ACTUAL DISPLAY */}
          <div className="p-2 grid grid-cols-3 justify-center gap-3 h-full">
            <AddRecipeCard />
            <RecipeCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyCookbookDisplay;

{
  /* <CommonButton
            label="+ Add Recipe"
            variant="new"
            adjustments="py-2"
            url="/create"
          /> */
}
