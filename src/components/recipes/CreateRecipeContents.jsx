import InstructionsInputBox from "./InstructionsInputBox";
import IngredientInputBox from "./IngredientInputBox";

import { useState } from "react";

const CreateRecipeContents = ({
  ingredients,
  setIngredients,
  instructions,
  setInstructions,
}) => {
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
      <div className="flex flex-col gap-10 px-3 py-3 overflow-auto">
        {/* TITLE / FAMILY ONLY */}
        <div className="flex justify-between items-center">
          <fieldset className="border border-amber-300 w-lg bg-white rounded-xl shadow-sm py-1">
            <legend className="text-sm text-amber-600 ml-3 font-semibold">
              Recipe Title
            </legend>
            <input
              name="title"
              type="text"
              className="font-semibold pb-1 px-3 w-full focus:outline-none"
              required
            />
          </fieldset>
          <div className="mt-2 flex gap-1 items-center bg-amber-300 px-2 h-10 rounded text-amber-700 font-semibold">
            <p>Family Only</p>
            <input type="checkbox" name="familyOnly" id="" className="" checked/>
          </div>
        </div>
        {/* COOK / PREP / SIZE */}
        <div className="flex gap-2">
          <fieldset className="border border-amber-300 w-full bg-white rounded-xl shadow-sm py-1">
            <legend className="text-sm text-amber-600 ml-3 font-semibold">
              Cook Time
            </legend>
            <div className="flex px-3 pb-1 items-center">
              <input
                name="cookTime"
                type="text"
                className="font-semibold w-full focus:outline-none"
              />
              <select
                name="cookTimeUnit"
                className="text-amber-700 bg-amber-200 px-2 py-1 rounded-lg "
              >
                <option value="mins">minutes</option>
                <option value="hrs">hours</option>
              </select>
            </div>
          </fieldset>

          <fieldset className="border border-amber-300 w-full  bg-white rounded-xl shadow-sm py-1">
            <legend className="text-sm text-amber-600 ml-3 font-semibold">
              Prep Time
            </legend>
            <div className="flex px-3 pb-1 items-center">
              <input
                name="prepTime"
                type="text"
                className="font-semibold w-full focus:outline-none"
              />
              <select
                name="prepTimeUnit"
                className="text-amber-700 bg-amber-200 px-2 py-1 rounded-lg "
              >
                <option value="mins">minutes</option>
                <option value="hrs">hours</option>
              </select>
            </div>
          </fieldset>

          <fieldset className=" w-full border border-amber-300 bg-white rounded-xl shadow-sm py-1">
            <legend className="text-sm text-amber-600 ml-3 font-semibold">
              Serving Size
            </legend>
            <input
              name="servings"
              type="text"
              className="font-semibold pb-1 px-3 w-full focus:outline-none"
            />
          </fieldset>
        </div>
        {/* INGREDIENTS */}
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

          {/* should add a warning if the user tries to click the disabled button */}
          <button
            className={`${
              canAddIngredient
                ? "text-amber-700 bg-amber-400 hover:bg-amber-300 cursor-pointer shadow-sm transition"
                : "text-amber-400 bg-amber-200 cursor-not-allowed"
            } w-36 rounded font-semibold px-2 py-2 self-end mr-10`}
            onClick={handleAddIngredient}
            disabled={!canAddIngredient}
            type="button"
          >
            +Add Ingredient
          </button>
        </div>
        {/* INSTRUCTIONS */}
        <div className="flex flex-col gap-3">
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
                ? "text-amber-700 bg-amber-400 hover:bg-amber-300 cursor-pointer shadow-sm transition"
                : "text-amber-400 bg-amber-200 cursor-not-allowed"
            } w-36 rounded font-semibold px-2 py-2 self-end mr-10`}
            onClick={handleAddInstruction}
            disabled={!canAddInstructions}
            type="button"
          >
            +Add Instruction
          </button>
        </div>

        {/* NOTES */}
        <div>
          <fieldset className="border border-amber-300 w-full bg-white rounded-xl shadow-sm py-1">
            <legend className="text-sm text-amber-600 ml-3 font-semibold">
              Notes
            </legend>
            <textarea
              name="notes"
              className="w-full h-full focus:outline-none px-3"
              rows="10"
            ></textarea>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default CreateRecipeContents;
