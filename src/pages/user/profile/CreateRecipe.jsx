import CommonButton from "../../../components/commonUI/CommonButton";

import { useState } from "react";
import IngredientInputBox from "../../../components/recipes/IngredientInputBox";
import CreateRecipeSideBar from "../../../components/recipes/CreateRecipeSideBar";
import InstructionsInputBox from "../../../components/recipes/InstructionsInputBox";

const CreateRecipe = () => {
  const [ingredients, setIngredients] = useState([
    { quantity: "", unit: "", name: "" },
  ]);

  const [instructions, setInstructions] = useState([
    { instruction: "", img: "" },
  ]);

  const [focusIndex, setFocusIndex] = useState(null);

  const canAddInstructions =
    instructions[instructions.length - 1]?.instruction?.trim().length > 0;

  const handleAddInstruction = () => {
    const lastInstruction = instructions[instructions.length - 1];

    if (!lastInstruction?.instruction?.trim()) {
      return;
    }

    setInstructions((prev) => [...prev, { instruction: "", img: "" }]);
    setFocusIndex(instructions.length);
  };

  const canAddIngredient =
    ingredients[ingredients.length - 1]?.name?.trim().length > 0;

  const handleAddIngredient = () => {
    const lastIngredient = ingredients[ingredients.length - 1];

    if (!lastIngredient?.name?.trim()) {
      return;
    }

    setIngredients((prev) => [...prev, { quantity: "", unit: "", name: "" }]);
    setFocusIndex(ingredients.length);
  };

  const handleRemoveIngredient = (index) => {
    setIngredients((prev) =>
      prev.length === 1 ? prev : prev.filter((_, i) => i !== index)
    );
  };

  const handleRemoveInstruction = (index) => {
    setInstructions((prev) =>
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

  const handleInstructionChange = (index, field, value) => {
    setInstructions((prev) =>
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
          <CreateRecipeSideBar />
          {/* CONTENT HERE */}

          {/* TITLE */}
          <div className="p-3 overflow-auto flex flex-col gap-3">
            <div>
              <p className="font-semibold">Recipe Title</p>
              <input
                placeholder="Title"
                type="text"
                className="border rounded p-1 w-xs"
              />
              <p className="text-sm">Created by Nick • Last saved 2 min ago</p>
            </div>

            {/* INGREDIENTS */}
            <div className="">
              <p className="font-semibold">Ingredients</p>
              <div className="flex flex-col gap-3">
                {ingredients.map((ingredient, index) => (
                  <IngredientInputBox
                    key={index}
                    index={index}
                    ingredient={ingredient}
                    onChange={handleIngredientChange}
                    onDelete={handleRemoveIngredient}
                    shouldFocus={index === focusIndex}
                  />
                ))}
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
              </div>
            </div>

            {/* INSTRUCTIONS */}
            <div>
              <p className="font-semibold">Instructions</p>
              <div className="flex flex-col gap-1">
                {instructions.map((instruction, index) => (
                  <InstructionsInputBox
                    key={index}
                    index={index}
                    instruction={instruction}
                    onChange={handleInstructionChange}
                    onDelete={handleRemoveInstruction}
                    shouldFocus={index === focusIndex}
                  />
                ))}
                <button
                  className={`${
                    canAddInstructions
                      ? "bg-amber-400 hover:bg-amber-300 cursor-pointer transition"
                      : "bg-amber-100 cursor-not-allowed"
                  } w-34 rounded px-2 py-1`}
                  onClick={handleAddInstruction}
                  disabled={!canAddInstructions}
                  type="button"
                >
                  Add Instruction
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRecipe;
