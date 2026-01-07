import { FaFloppyDisk } from "react-icons/fa6";
import { MdPublish } from "react-icons/md";
import { FaRegImage } from "react-icons/fa";

const CreateRecipeSideBar = ({ onSaveDraft, onPublish }) => {
  return (
    <div className="p-2 border-r-2 border-dashed bg-amber-100/50 border-amber-200 flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <p className="text-center font-semibold px-2 py-1 rounded-full bg-amber-300 w-40 mx-auto text-amber-700 shadow-xs mt-3">
          Featured Image
        </p>
        <div className="border-2 border-amber-600 bg-amber-600/50 w-full h-55 rounded">
          <button className="text-white/60 hover:text-white text-5xl flex justify-center items-center h-full w-full transition">
            <FaRegImage />
          </button>
        </div>
      </div>
      <hr className="text-amber-300 w-[90%] mx-auto shadow-xs" />
      <p className="text-center font-semibold px-2 py-1 rounded-full bg-amber-300 w-40 mx-auto text-amber-700 shadow-xs mt-3">
        Recipe Progress
      </p>
      <div className="px-3 font-semibold">
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
      <hr className="text-amber-300 w-[90%] mx-auto shadow-xs" />
      <div className="flex flex-col gap-3 mt-auto">
        <div className="flex gap-1 items-center bg-amber-300 w-40 justify-center rounded-full mx-auto py-1">
          <div className="h-3 w-3 rounded-full border border-red-800 bg-red-600"></div>
          <p className="font-semibold text-amber-700">Status: Draft</p>
        </div>
        <p className="text-sm">Created by Nick • Last saved 2 min ago</p>
        <div className="flex flex-col gap-3">
          <button
            className="group text-white font-semibold py-2 w-full flex items-center justify-center bg-black hover:bg-black/70 transition"
            type="submit"
            onClick={onSaveDraft}
          >
            <p className="flex gap-1 items-center text-xl">
              <FaFloppyDisk className="group-hover:animate-bounce" /> Save
            </p>
          </button>
          <button
            className="group text-white font-semibold py-2 w-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-400 transition"
            type="submit"
            onClick={onPublish}
          >
            <p className="flex gap-1 items-center text-xl">
              <MdPublish className="group-hover:animate-bounce" /> Publish
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipeSideBar;
