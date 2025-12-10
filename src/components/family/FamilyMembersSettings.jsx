import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";

const FamilyMembersSettings = () => {
  const { user, token } = useAuth();
  const [error, setError] = useState(null);
  const [family, setFamily] = useState(null);

  console.log(family.members.length);

  useEffect(() => {
    if (!user?.family?.slug) return;

    const fetchFamily = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/families/${user.family.slug}`
        );

        if (!res.ok) {
          throw new Error("Failed to load family");
        }

        const data = await res.json();
        setFamily(data.family);
      } catch (error) {
        console.error(error);
        setError("Failed to load family");
      }
    };
    fetchFamily();
  }, [user]);

  return (
    <>
      <p>{family.members.length}</p>
    </>
  );
};

export default FamilyMembersSettings;
