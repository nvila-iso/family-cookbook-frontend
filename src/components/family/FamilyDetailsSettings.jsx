import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router";

const FamilyDetailsSettings = () => {
  const { user } = useAuth();
  console.log(user);
  const familySlug = user?.family?.slug;

  if (!familySlug) return null;

  return (
    <>
      <Link to={`/family/${familySlug}/manage`}>Family</Link>
    </>
  );
};

export default FamilyDetailsSettings;
