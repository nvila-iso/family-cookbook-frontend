import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const CreateFamily = () => {
  const [error, setError] = useState(null);
  const { token, setUser } = useAuth();
  const navigate = useNavigate();

  // CREATE FAMILY
  const handleCreateNewFamily = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    const familyName = fd.get("familyName");

    try {
      const res = await fetch("http://localhost:5000/api/families/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: familyName }),
      });

      const data = await res.json();
      setUser(data.user);
      console.log("Family Created:", data);
      navigate("/settings");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col slide-left-to-right">
        <form onSubmit={handleCreateNewFamily} className="flex flex-col gap-3">
          <fieldset className="border">
            <legend className="text-xs ml-3 font-semibold">Family Name</legend>
            <input
              name="familyName"
              type="text"
              className="pb-1 px-3 w-full focus:outline-none"
              required
            />
          </fieldset>
          <button
            type="submit"
            className="text-white text-sm font-semibold px-3 py-2 w-xs mx-auto rounded-full bg-lime-600 hover:bg-lime-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateFamily;
