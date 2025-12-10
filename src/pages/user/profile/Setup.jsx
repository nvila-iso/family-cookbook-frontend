import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import UserDetails from "../../../components/setup/UserDetails";
import FamilyDetails from "../../../components/setup/FamilyDetails";
import CreateFamily from "../../../components/setup/CreateFamily";
import { useAuth } from "../../../context/AuthContext";

const Setup = () => {
  const [showFamilyOption, setShowFamilyOption] = useState(false);
  const [showSetupScreen, setShowSetupScreen] = useState("user-details");
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user === null) return null;

  const isMissingUserDetails =
    !user?.firstName || !user.lastName || !user.username;
  const isMissingFamily = !user?.familyId;

  useEffect(() => {
    if (!isMissingUserDetails) {
      setShowSetupScreen("family-details");
    }
  }, []);

  useEffect(() => {
    if (!isMissingUserDetails && !isMissingFamily) {
      navigate("/settings");
    }
  }, [isMissingUserDetails, isMissingFamily, navigate]);

  return (
    <>
      <div className="max-w-6xl mx-auto px-3 h-screen">
        <div className="flex justify-center items-center h-full">
          {showSetupScreen === "user-details" && (
            <UserDetails setShowSetupScreen={setShowSetupScreen} />
          )}
          {showSetupScreen === "family-details" && (
            <FamilyDetails setShowSetupScreen={setShowSetupScreen} />
          )}
          {showSetupScreen === "create-family" && <CreateFamily />}
        </div>
      </div>
    </>
  );
};

export default Setup;
