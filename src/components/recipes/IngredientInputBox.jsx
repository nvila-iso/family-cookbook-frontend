import { MdDeleteForever } from "react-icons/md";
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
    <div className="flex gap-3">
      <input
        placeholder="ingredient name"
        ref={nameInputRef}
        type="text"
        className="border p-1 rounded"
        name="name"
        value={ingredient.name}
        onChange={(e) => onChange(index, "name", e.target.value)}
      />

      <input
        placeholder="quantity"
        type="text"
        className="border p-1 rounded"
        name="quantity"
        value={ingredient.quantity}
        onChange={(e) => onChange(index, "quantity", e.target.value)}
      />

      <input
        placeholder="unit"
        type="text"
        className="border p-1 rounded"
        name="unit"
        value={ingredient.unit}
        onChange={(e) => onChange(index, "unit", e.target.value)}
      />

      <MdDeleteForever
        className="rounded self-center text-2xl hover:text-red-500 transition cursor-pointer"
        onClick={() => onDelete(index)}
      />
    </div>
  );
};

export default IngredientInputBox;
