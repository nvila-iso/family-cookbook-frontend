const CreateRecipeSideBar = () => {
  return (
    <div className="py-2 border-r border-black/30">
      <p className="text-center font-semibold">Recipe Progress </p>
      <div className="px-3">
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
      <hr className="opacity-30" />
      <div className="flex flex-col">
        <p>Status: Draft</p>
        <button>Save Draft</button>
        <button>Publish</button>
      </div>
    </div>
  );
};

export default CreateRecipeSideBar;
