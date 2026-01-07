import { useState } from "react";
import CreateRecipeSideBar from "../../../components/recipes/CreateRecipeSideBar";
import CreateRecipeContents from "../../../components/recipes/CreateRecipeContents";
import { useAuth } from "../../../context/AuthContext";
import { createRecipe } from "../../../services/recipeService";

const CreateRecipe = () => {
  const { token } = useAuth();
  const [submitMode, setSubmitMode] = useState(null);
  const [ingredients, setIngredients] = useState([
    { quantity: "", unit: "", name: "" },
  ]);

  const [instructions, setInstructions] = useState([
    { instruction: "", img: "" },
  ]);

  // decide which button the user pressed
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!submitMode) {
      console.warn("Submit mode not set");
      return;
    }

    const fd = new FormData(e.currentTarget);

    const payload = {
      status: submitMode,

      title: fd.get("title"),
      familyOnly: fd.get("familyOnly") === "on",

      cookTime: {
        value: fd.get("cookTime"),
        unit: fd.get("cookTimeUnit"),
      },

      prepTime: {
        value: fd.get("prepTime"),
        unit: fd.get("prepTimeUnit"),
      },

      servings: fd.get("servings"),
      notes: fd.get("notes"),
    };

    const visiblity = payload.familyOnly ? "PRIVATE" : "PUBLIC";

    const cleanedIngredients = ingredients
      .map((i) => ({
        name: i.name.trim(),
        quantity: i.quantity.trim(),
        unit: i.unit.trim(),
      }))
      .filter((i) => i.name.length > 0);

    const cleanedInstructions = instructions.map((step, index) => ({
      stepNumber: index + 1,
      instruction: step.instruction.trim(),
    }));

    const fullPayload = {
      ...payload,
      visiblity,
      ingredients: cleanedIngredients,
      instructions: cleanedInstructions,
    };

    console.log(fullPayload);

    try {
      const created = await createRecipe(fullPayload, token);
      const recipeId = created.id;

      for (const step of fullPayload.instructions) {
        await fetch(`http://localhost:5000/api/recipes/${recipeId}/steps`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            stepNumber: step.stepNumber,
            instruction: step.instruction,
          }),
        });
      }
      console.log("Recipe + steps saved");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="fade-in mt-5 w-full h-[80vh] bg-amber-100/20">
        <form
          onSubmit={handleSubmit}
          className=" w-full h-full rounded-xl shadow-sm p-3"
        >
          <div className="h-full w-full grid grid-cols-[25%_75%] border-2 border-dashed border-amber-200 rounded-xl">
            <CreateRecipeSideBar
              onSaveDraft={() => setSubmitMode("DRAFT")}
              onPublish={() => setSubmitMode("PUBLISHED")}
            />
            <CreateRecipeContents
              ingredients={ingredients}
              setIngredients={setIngredients}
              instructions={instructions}
              setInstructions={setInstructions}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateRecipe;
