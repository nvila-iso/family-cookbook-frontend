import { MdDeleteForever } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { useEffect, useRef } from "react";

const InstructionsInputBox = ({
  index,
  instruction,
  onChange,
  onDelete,
  shouldFocus,
}) => {
  const instructionInputRef = useRef(null);

  useEffect(() => {
    if (shouldFocus && instructionInputRef.current) {
      instructionInputRef.current.focus();
    }
  }, [shouldFocus]);

  return (
    <div className="flex gap-3 items-center">
      <div className="w-6 h-6 bg-black rounded-full text-white flex justify-center items-center text-xs font-semibold">
        {index + 1}
      </div>
      <input
        ref={instructionInputRef}
        value={instruction.instruction}
        name="instruction"
        type="text"
        className="border p-1 rounded w-sm"
        onChange={(e) => onChange(index, "instruction", e.target.value)}
      />
      <div className="p-2 bg-sky-300 rounded text-lg text-sky-900">
        <FaCameraRetro className="" />
      </div>
      <MdDeleteForever className="text-2xl" onClick={() => onDelete(index)} />
    </div>
  );
};

export default InstructionsInputBox;
