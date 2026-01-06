import { MdDeleteForever } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { ImCross } from "react-icons/im";

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
      <fieldset className="border border-amber-300 w-full bg-white rounded-xl shadow-sm px-2 py-1 flex items-center">
        <legend className="text-sm text-amber-600 ml-3 font-semibold">
          Step {index + 1}
        </legend>
        <input
          ref={instructionInputRef}
          value={instruction.instruction}
          name="instruction"
          type="text"
          className="font-semibold pb-1 px-3 focus:outline-none w-full"
          onChange={(e) => onChange(index, "instruction", e.target.value)}
        />
        <div className="relative bottom-1 p-2 bg-sky-500 rounded text-lg text-sky-300 hover:bg-sky-400 transition hover:text-sky-700 cursor-pointer">
          <FaCameraRetro className="" />
        </div>
      </fieldset>

      <div className="w-20 h-20 bg-black rounded hidden"></div>
      <div className="flex gap-3">
        <ImCross
          className="mt-2 text-red-400 rounded self-center text-xl hover:text-red-500 transition cursor-pointer"
          onClick={() => onDelete(index)}
        />
      </div>
    </div>
  );
};

export default InstructionsInputBox;
