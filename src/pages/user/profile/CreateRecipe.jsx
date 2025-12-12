import CommonButton from "../../../components/commonUI/CommonButton";

import { useState } from "react";
import IngredientInputBox from "../../../components/recipes/IngredientInputBox";

const CreateRecipe = () => {
  const [ingredients, setIngredients] = useState([
    { quantity: "", unit: "", name: "" },
  ]);

  const canAddIngredient =
    ingredients[ingredients.length - 1]?.name?.trim().length > 0;

  const handleAddIngredient = () => {
    const lastIngredient = ingredients[ingredients.length - 1];

    if (!lastIngredient?.name?.trim()) {
      return;
    }

    setIngredients((prev) => [...prev, { quantity: "", unit: "", name: "" }]);
  };

  const handleRemoveIngredient = (index) => {
    setIngredients((prev) =>
      prev.length === 1 ? prev : prev.filter((_, i) => i !== index)
    );
  };

  const handleIngredientChange = (index, field, value) => {
    setIngredients((prev) =>
      prev.map((ingredient, i) =>
        i === index ? { ...ingredient, [field]: value } : ingredient
      )
    );
  };

  return (
    <>
      <div className="w-full py-3 h-[80vh] flex justify-center items-center">
        <div className="grid grid-cols-[25%_1fr] w-full h-[100%] border border-black/30 rounded">
          {/* SIDE MENU */}
          <div className="py-2 border-r border-black/30">
            <p className="text-center font-semibold">Recipe Progress </p>
            <div className="px-3">
              <div className="flex gap-1 items-center">
                <div className="h-3 w-3 rounded-full border"></div>
                <p>Recipe Title</p>
              </div>
              <div className="flex gap-1 items-center">
                <div className="h-3 w-3 rounded-full border"></div>
                <p>Ingredients</p>
              </div>
              <div className="flex gap-1 items-center">
                <div className="h-3 w-3 rounded-full border"></div>
                <p>Instructions</p>
              </div>
              <div className="flex gap-1 items-center">
                <div className="h-3 w-3 rounded-full border"></div>
                <p>Details</p>
              </div>
            </div>
            <hr className="opacity-30" />
            <div className="flex flex-col">
              <p>Status: Draft</p>
              <button>Save Draft</button>
              <button>Publish</button>
            </div>
          </div>

          {/* CONTENT HERE */}
          <div className="p-3 overflow-auto flex flex-col gap-3">
            <div>
              <p className="font-semibold">Recipe Title</p>
              <input type="text" className="border rounded p-1 w-xs" />
              <p className="text-sm">Created by Nick • Last saved 2 min ago</p>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold">Ingredients</p>
              <button
                className={`${
                  canAddIngredient
                    ? "bg-amber-400 hover:bg-amber-300 cursor-pointer transition"
                    : "bg-amber-100 cursor-not-allowed"
                } w-34 rounded px-2 py-1`}
                onClick={handleAddIngredient}
                disabled={!canAddIngredient}
                type="button"
              >
                Add Ingredient
              </button>
              {ingredients.map((ingredient, index) => (
                <IngredientInputBox
                  key={index}
                  index={index}
                  ingredient={ingredient}
                  onChange={handleIngredientChange}
                  onDelete={handleRemoveIngredient}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRecipe;
