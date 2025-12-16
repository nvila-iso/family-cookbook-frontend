import { Link } from "react-router";
import { MdPeopleAlt } from "react-icons/md";
import { BsPostcardHeartFill } from "react-icons/bs";
import { RiUserFollowFill } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";
import star from "../../assets/star.svg";

const FamilyProfileSidePanel = ({ family, user }) => {
  const isFamilyMember = user?.family?.id === family?.id;

  return (
    <>
      <div className="h-[60vh] p-2 border rounded-3xl bg-amber-100/20 border-amber-200 shadow-md">
        <div className="p-2 h-full border-2 border-dashed border-amber-200 rounded-2xl grid grid-rows-[1fr_60px_1fr_38px] gap-2">
          <div className="flex flex-col justify-center items-center relative overflow-hidden">
            <div className="border border-white border-5 flex justify-center items-center mx-auto w-30 h-30 rounded-full bg-teal-100 text-lime-700 text-[5rem] text-center font-semibold shadow-xs">
              <p>{family?.name?.[0]?.toUpperCase() || "U"}</p>
            </div>
            <p className="text-3xl text-center italic text-black/60 font-semibold">
              {family?.name} Family
            </p>
            <img src={star} alt="" className="size-7 absolute left-45 bottom-40 rotate-15"/>
            <img src={star} alt="" className="size-4 absolute left-41 bottom-41 rotate-15"/>
            <img src={star} alt="" className="size-3 absolute right-48 bottom-25"/>
          </div>
          <div>
            <div className="bg-white grid grid-cols-[1fr_1px_1fr_1px_1fr] px-1 py-3 rounded-xl shadow-sm">
              {/* MEMBERS */}
              <div className="flex flex-col justify-center items-center text-xs">
                <MdPeopleAlt className="text-base text-lime-600" />
                <div className="flex gap-1">
                  <p>{family?.members?.length}</p>
                  {family?.members?.length > 1 ? <p>members</p> : <p>member</p>}
                </div>
              </div>
              <div className="w-[1px] h-full bg-black/20"></div>
              {/* RECIPES */}
              <div className="flex flex-col justify-center items-center text-xs">
                <BsPostcardHeartFill className="text-base text-amber-400" />
                <div className="flex gap-1">
                  <p>{family?.recipes?.length}</p>
                  {family?.recipes?.length > 1 ? <p>recipes</p> : <p>recipe</p>}
                </div>
              </div>
              <div className="w-[1px] h-full bg-black/20"></div>
              {/* FOLLOWERS */}
              <div className="flex flex-col justify-center items-center text-xs">
                <RiUserFollowFill className="text-base text-purple-400" />
                <div className="flex gap-1">
                  <p>?</p>
                  <p>followers</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>
              Fusce ac eleifend nisi. Cras maximus malesuada libero, ac
              consectetur libero volutpat in. Maecenas dolor turpis, accumsan a
              nulla id, aliquam pretium urna. Sed et elementum tortor.
              Pellentesque habitant morbi tristique.
            </p>
          </div>
          <div className="flex justify-center item-center">
            {isFamilyMember && (
              <button className="flex justify-center items-center gap-1 bg-white rounded-full w-full shadow-sm text-lg font-semibold text-stone-500">
                <FaGear className="text-stone-400" /> Settings
              </button>
            )}
            {/* {user && !isFamilyMember ? (
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
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyProfileSidePanel;
