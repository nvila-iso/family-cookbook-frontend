const AddRecipeCard = () => {
  return (
    <>
      <div className="border border-transparent group p-2 flex flex-col rounded-xl shadow-sm w-full h-68 justify-center items-center bg-emerald-50 hover:border hover:border-emerald-200 hover:bg-emerald-100 hover:shadow-xs hover:inset-shadow-emerald-300 hover:inset-shadow-sm transition">
        <div className="border-2 rounded-lg border-emerald-400 border-dashed w-full h-full flex justify-center items-center">
          <p className="font-semibold text-zinc-500 py-2 px-5 bg-emerald-100 rounded-full shadow-xs border border-emerald-300 hover:shadow-md hover:text-zinc-600 group-hover:bg-emerald-300 transition">
            +New Recipe
          </p>
        </div>
      </div>
    </>
  );
};

export default AddRecipeCard;
