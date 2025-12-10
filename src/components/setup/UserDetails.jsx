import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import { toast } from "react-toastify";

const UserDetails = ({ setShowSetupScreen }) => {
  const [error, setError] = useState(null);
  const { user, setUser, token } = useAuth();

  const registrationComplete = () => toast("Registration Completed!");

  const handleUserDetails = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    const firstName = fd.get("firstName");
    const lastName = fd.get("lastName");
    const username = fd.get("username");

    const updatedDetails = { firstName, lastName, username };

    try {
      const res = await fetch(
        `http://localhost:5000/api/users/${user.id}/profile`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedDetails),
        }
      );

      const data = await res.json();
      setUser(data);

      console.log("Updated user:", data);
      registrationComplete();
      setShowSetupScreen("family-details");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  return (
    <>
      <div className="relative slide-left-to-right">
        <div className="text-center flex flex-col gap-1 mb-3">
          <h2 className="text-3xl font-semibold">Complete Setup</h2>
          <p>Thanks again for registering! Time to finish your profile.</p>
        </div>
        <form
          onSubmit={handleUserDetails}
          className="flex flex-col w-[90%] mx-auto gap-2"
        >
          <fieldset className="border ">
            <legend className="text-xs ml-3 font-semibold">First Name</legend>
            <input
              name="firstName"
              type="text"
              className="pb-1 px-3 w-full focus:outline-none"
              required
            />
          </fieldset>
          <fieldset className="border ">
            <legend className="text-xs ml-3 font-semibold">Last Name</legend>
            <input
              name="lastName"
              type="text"
              className="pb-1 px-3 w-full focus:outline-none"
              required
            />
          </fieldset>
          <fieldset className="border ">
            <legend className="text-xs ml-3 font-semibold">Username</legend>
            <input
              name="username"
              type="text"
              className="pb-1 px-3 w-full focus:outline-none"
              required
            />
          </fieldset>
          <button
            type="submit"
            className="text-white text-sm font-semibold px-3 py-2 w-[60%] mx-auto rounded-full bg-lime-600 hover:bg-lime-700 transition"
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default UserDetails;
