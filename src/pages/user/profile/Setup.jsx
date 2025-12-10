import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import UserDetails from "../../../components/setup/UserDetails";
import FamilyDetails from "../../../components/setup/FamilyDetails";
import { useAuth } from "../../../context/AuthContext";

const Setup = () => {
  const [showFamilyOption, setShowFamilyOption] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user === null) return null;

  const isMissingUserDetails =
    !user?.firstName || !user.lastName || !user.username;
  const isMissingFamily = !user?.familyId;

  useEffect(() => {
    if (!isMissingUserDetails && !isMissingFamily) {
      navigate("/family_cookbook");
    }
  }, [isMissingUserDetails, isMissingFamily, navigate]);

  return (
    <>
      <div className="max-w-6xl mx-auto px-3 h-screen">
        <div className="flex justify-center items-center h-full">
          {isMissingUserDetails ? (
            <UserDetails />
          ) : isMissingFamily ? (
            <FamilyDetails />
          ) : (
            <div>All setup complete!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Setup;
