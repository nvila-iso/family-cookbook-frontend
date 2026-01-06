import { MdDeleteForever } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useEffect, useRef } from "react";

const IngredientInputBox = ({
  index,
  ingredient,
  onChange,
  onDelete,
  shouldFocus,
}) => {
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (shouldFocus && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [shouldFocus]);

  return (
    <div className="flex gap-3 ">
      <fieldset className="border border-amber-300 w-xs bg-white rounded-xl shadow-sm py-1">
        <legend className="text-sm text-amber-600 ml-3 font-semibold">
          Ingredient Name
        </legend>
        <input
          name="name"
          ref={nameInputRef}
          type="text"
          className="font-semibold pb-1 px-3 w-full focus:outline-none"
          value={ingredient.name}
          onChange={(e) => onChange(index, "name", e.target.value)}
        />
      </fieldset>

      <fieldset className="border border-amber-300 w-xs bg-white rounded-xl shadow-sm py-1">
        <legend className="text-sm text-amber-600 ml-3 font-semibold">
          Quantity
        </legend>
        <input
          name="quantity"
          type="text"
          className="font-semibold pb-1 px-3 w-full focus:outline-none"
          value={ingredient.quantity}
          onChange={(e) => onChange(index, "quantity", e.target.value)}
        />
      </fieldset>

      <fieldset className="border border-amber-300 w-xs bg-white rounded-xl shadow-sm py-1">
        <legend className="text-sm text-amber-600 ml-3 font-semibold">
          Unit
        </legend>
        <input
          name="unit"
          type="text"
          className="font-semibold pb-1 px-3 w-full focus:outline-none"
          value={ingredient.unit}
          onChange={(e) => onChange(index, "unit", e.target.value)}
        />
      </fieldset>

      <ImCross
        className="text-red-400 rounded self-center mt-2 text-2xl hover:text-red-500 transition cursor-pointer"
        onClick={() => onDelete(index)}
      />
    </div>
  );
};

export default IngredientInputBox;
