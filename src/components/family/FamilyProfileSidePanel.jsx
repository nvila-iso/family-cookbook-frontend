import { Link } from "react-router";

const FamilyProfileSidePanel = ({ family, user }) => {
  const isFamilyMember = user?.family?.id === family?.id;
  console.log(user);

  return (
    <>
      <div className="flex flex-col border border-black/30 h-full rounded gap-3">
        {/* FAMILY DETAILS */}
        {/* STATS */}

        <div className="grid grid-cols-3 p-1 bg-amber-100">
          {/* MEMBERS */}
          <div className="flex flex-col justify-center items-center text-xs">
            <p>{family?.members?.length}</p>
            <p>members</p>
          </div>

          {/* RECIPES */}
          <div className="flex flex-col justify-center items-center text-xs">
            <p>?</p>
            <p>recipes</p>
          </div>

          {/* FOLLOWERS */}
          <div className="flex flex-col justify-center items-center text-xs">
            <p>?</p>
            <p>followers</p>
          </div>
        </div>

        {/* FAMILY SEAL / PROFILE IMG */}
        <div className="flex justify-center items-center mx-auto w-50 h-50 rounded-full bg-teal-100 text-lime-700 text-[10rem] text-center font-semibold">
          <p>{family?.name?.[0]?.toUpperCase() || "U"}</p>
        </div>

        {/* FAMILY BIO */}
        <div className="px-2">
          <p className="text-3xl text-center underline italic text-black/60 font-semibold">
            {family?.name}
          </p>
          <div className="py-2 w-[55%] grid grid-cols-5 mx-auto">
            {family?.members?.map((m) => (
              <p
                key={m.id}
                className="h-10 w-10 w-10 text-3xl text-center rounded-full bg-red-200 shadow-xs hover:z-1 hover:scale-110 transition cursor-pointer"
              >
                {m?.firstName?.[0]?.toUpperCase() ||
                  family?.name?.[0]?.toUpperCase()}
              </p>
            ))}
          </div>
          <p>
            Fusce ac eleifend nisi. Cras maximus malesuada libero, ac
            consectetur libero volutpat in. Maecenas dolor turpis, accumsan a
            nulla id, aliquam pretium urna. Sed et elementum tortor.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Aliquam erat volutpat. Aliquam quam nibh,
            lacinia at imperdiet ut, venenatis non ante. Donec at consequat
            magna. Vivamus lobortis tellus ut mauris lobortis sollicitudin.
          </p>
        </div>

        {/* FOLLOW BUTTON */}
        {user && !isFamilyMember ? (
          <button className="bg-teal-100 text-lime-700 font-bold px-2 py-1 w-32 rounded mx-auto mb-3 hover:bg-teal-200 transition">
            Follow
          </button>
        ) : isFamilyMember ? (
          <Link
            to="/settings"
            state={{ activeTab: "details" }}
            className="text-center bg-teal-100 text-lime-700 font-bold px-2 py-1 w-32 rounded mx-auto mb-3 hover:bg-teal-200 transition"
          >
            Settings
          </Link>
        ) : (
          <Link
            to="/login"
            className="text-center bg-teal-100 text-lime-700 font-bold px-2 py-1 w-44 rounded mx-auto mb-3 hover:bg-teal-200 transition"
          >
            Login to follow
          </Link>
        )}
      </div>
    </>
  );
};

export default FamilyProfileSidePanel;
