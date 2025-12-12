import { MdDeleteForever } from "react-icons/md";

const IngredientInputBox = ({ index, ingredient, onChange, onDelete }) => {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col">
        <p>quantity</p>
        <input
          type="text"
          className="border p-1 rounded"
          name="quantity"
          value={ingredient.quantity}
          onChange={(e) => onChange(index, "quantity", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <p>unit</p>
        <input
          type="text"
          className="border p-1 rounded"
          name="unit"
          value={ingredient.unit}
          onChange={(e) => onChange(index, "unit", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <p>ingredient name</p>
        <input
          type="text"
          className="border p-1 rounded"
          name="name"
          value={ingredient.name}
          onChange={(e) => onChange(index, "name", e.target.value)}
        />
      </div>
      <MdDeleteForever
        className="rounded relative top-3 left-2 self-center text-2xl hover:text-red-500 transition cursor-pointer"
        onClick={() => onDelete(index)}
      />
    </div>
  );
};

export default IngredientInputBox;
