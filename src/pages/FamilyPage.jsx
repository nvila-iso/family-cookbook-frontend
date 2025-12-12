import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

import FamilyProfileSidePanel from "../components/family/FamilyProfileSidePanel";
import FamilyCookbookDisplay from "../components/family/FamilyCookbookDisplay";

const FamilyPage = () => {
  const { slug } = useParams();
  const { user } = useAuth();
  const [family, setFamily] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFamily = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/families/${slug}`);

        if (!res.ok) throw new Error("Family no found");

        const data = await res.json();
        setFamily(data.family);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFamily();
  }, [slug]);

  return (
    <>
      <div className="py-5 w-full grid grid-cols-[25%_1fr] h-screen gap-x-5 mx-auto">
        <FamilyProfileSidePanel family={family} user={user} />

        {/* COOKBOOK SECTION */}
        <FamilyCookbookDisplay family={family} />
      </div>
    </>
  );
};

export default FamilyPage;
