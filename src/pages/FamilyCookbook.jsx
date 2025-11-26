import Search from "../components/commonUI/Search";
import { IoGridSharp } from "react-icons/io5";
import { PiListLight } from "react-icons/pi";

const FamilyCookbook = () => {
  return (
    <>
      <Search />
      <div className="p-5 w-full grid grid-cols-[25%_1fr] h-screen gap-x-5 mx-auto">
        <div className="flex flex-col border border-black/30 h-full rounded gap-3">
          {/* FAMILY DETAILS */}
          {/* STATS */}
          <div className="bg-teal-100 font-semibold rounded-t text-lime-700 flex justify-center gap-5 px-2 py-1 text-center text-sm">
            <div className="hover:underline cursor-pointer transition">
              <p>5</p>
              <p>Members</p>
            </div>
            <div className="hover:underline cursor-pointer transition">
              <p>12</p>
              <p className="hover:underline cursor-pointer transition">
                Recipes
              </p>
            </div>
            <div className="">
              <p>18</p>
              <p>Follows</p>
            </div>
            <div className="hover:underline cursor-pointer transition">
              <p>48</p>
              <p>Followers</p>
            </div>
          </div>

          {/* FAMILY SEAL / PROFILE IMG */}
          <div className="flex justify-center items-center mx-auto w-50 h-50 rounded-full bg-teal-100 text-lime-700 text-[10rem] text-center font-semibold">
            <p>V</p>
          </div>
          {/* FAMILY BIO */}
          <div className="px-2">
            <p className="text-3xl text-center underline italic text-black/60 font-semibold">
              The Vila's
            </p>
            <div className="py-2 w-[55%] grid grid-cols-5 mx-auto">
              <p className="h-10 w-10 w-10 text-3xl text-center rounded-full bg-red-200 shadow-xs hover:z-1 hover:scale-110 transition cursor-pointer">
                V
              </p>
              <p className="h-10 w-10 w-10 text-3xl text-center rounded-full bg-yellow-200 shadow-xs hover:z-1 hover:scale-110 transition cursor-pointer">
                V
              </p>
              <p className=" h-10 w-10 text-3xl text-center rounded-full bg-green-200 shadow-xs hover:z-1 hover:scale-110 transition cursor-pointer">
                V
              </p>
              <p className=" h-10 w-10 text-3xl text-center rounded-full bg-blue-200 shadow-xs hover:z-1 hover:scale-110 transition cursor-pointer">
                V
              </p>
              <p className=" h-10 w-10 text-3xl text-center rounded-full bg-purple-200 shadow-xs hover:z-1 hover:scale-110 transition cursor-pointer">
                V
              </p>
            </div>
            <p>
              Fusce ac eleifend nisi. Cras maximus malesuada libero, ac
              consectetur libero volutpat in. Maecenas dolor turpis, accumsan a
              nulla id, aliquam pretium urna. Sed et elementum tortor.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aliquam erat volutpat. Aliquam
              quam nibh, lacinia at imperdiet ut, venenatis non ante. Donec at
              consequat magna. Vivamus lobortis tellus ut mauris lobortis
              sollicitudin.
            </p>
          </div>

          {/* FOLLOW BUTTON */}
          <button className="bg-teal-100 text-lime-700 font-bold px-2 py-1 w-32 rounded mx-auto mb-3 hover:bg-teal-200 transition">
            Follow
          </button>
        </div>

        {/* COOKBOOK SECTION */}
        <div className="border border-black/30 rounded p-2">
          <div className="flex justify-between">
            {/* FILTERS */}
            <div className="flex gap-5">
              <select
                name=""
                id=""
                className="text-sm w-32 bg-zinc-100 text-center py-2 text-zinc-500 hover:text-zinc-700 font-semibold rounded"
              >
                <option value="">All Members</option>
              </select>
              <select
                name=""
                id=""
                className="text-sm w-32 bg-zinc-100 text-center py-2 text-zinc-500 hover:text-zinc-700 font-semibold rounded"
              >
                <option value="">All Recipes</option>
              </select>
            </div>
            {/* DISPLAY TOGGLE */}
            <div className="flex justify-center items-center px-3 bg-zinc-100 text-xl gap-2 rounded">
              <IoGridSharp className="text-teal-500" />
              <div className="w-[1px] h-[50%] bg-black"></div>
              <PiListLight className="text-black/30 hover:text-black" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyCookbook;
