import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import { ToastContainer, toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = useState(null);
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);

  const registrationSuccess = () => toast("Registration Success");

  const handleRegistration = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    const email = fd.get("email");
    const passwordOne = fd.get("passwordOne");
    const passwordTwo = fd.get("passwordTwo");

    if (passwordOne !== passwordTwo) {
      setError("Your passwords don't match!");
      return;
    }

    const password = passwordTwo;

    const registrationData = { email, password };

    try {
      await register(registrationData);
      registrationSuccess();
      navigate("/login");
    } catch (error) {
      setError(error);
    }
  };

  const handleShowPassword = (field) => {
    if (field === 1 && showPasswordOne) {
      return "text";
    } else if (field === 2 && showPasswordTwo) {
      return "text";
    } else {
      return "password";
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-3 h-screen">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="w-xs h-130 rounded-lg shadow-lg flex flex-col items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt=""
                className="rounded-t-lg"
              />
            </div>
            <form
              onSubmit={handleRegistration}
              className="w-[90%] flex flex-col gap-2 mt-3"
            >
              {/* EMAIL */}
              <fieldset className="border ">
                <legend className="text-xs ml-3 font-semibold">E-Mail</legend>
                <input
                  name="email"
                  type="text"
                  className="pb-1 px-3 w-full focus:outline-none"
                />
              </fieldset>
              {/* PASSWORD */}
              <fieldset className="border ">
                <legend className="text-xs ml-3 font-semibold">Password</legend>
                <div className="relative">
                  <input
                    name="passwordOne"
                    type={handleShowPassword(1)}
                    className="pb-1 px-3 w-full focus:outline-none"
                    required
                  />
                  {showPasswordOne ? (
                    <FaRegEye
                      className="absolute -translate-y-6 translate-x-65 cursor-pointer"
                      onClick={() => setShowPasswordOne(false)}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="absolute -translate-y-6 translate-x-65 cursor-pointer"
                      onClick={() => setShowPasswordOne(true)}
                    />
                  )}
                </div>
              </fieldset>
              <fieldset className="border ">
                <legend className="text-xs ml-3 font-semibold">
                  Repeat Password
                </legend>
                <div className="relative">
                  <input
                    name="passwordTwo"
                    type={handleShowPassword(2)}
                    className="pb-1 px-3 w-full focus:outline-none"
                    required
                  />
                  {showPasswordTwo ? (
                    <FaRegEye
                      className="absolute -translate-y-6 translate-x-65 cursor-pointer"
                      onClick={() => setShowPasswordTwo(false)}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="absolute -translate-y-6 translate-x-65 cursor-pointer"
                      onClick={() => setShowPasswordTwo(true)}
                    />
                  )}
                </div>
              </fieldset>
              <div className="flex justify-between text-xs">
                <p>{error}</p>

                <p className="italic underline">have an account?</p>
              </div>

              <button
                type="submit"
                className="text-white text-sm font-semibold px-3 py-2 w-[70%] mx-auto rounded-full bg-lime-600 hover:bg-lime-700 transition"
              >
                Register
              </button>
            </form>
            <div className="mt-5 flex justify-center items-center">
              <hr className="w-28 text-zinc-300" />
              <p className="relative bottom-[1px] text-sm bg-white px-2">or</p>
              <hr className="w-28 text-zinc-300" />
            </div>
            <p>SSO HERE</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
