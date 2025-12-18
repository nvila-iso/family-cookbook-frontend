import { useParams } from "react-router";
import { useEffect, useState } from "react";

const PublicFamilyPage = () => {
  const { slug } = useParams();
  const [family, setFamily] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchFamily = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/families/${slug}/public`
        );

        if (!res.ok) {
          throw new Error("Family not found");
        }

        const data = await res.json();
        setFamily(data.family);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFamily();
  }, [slug]);

  //   if (loading) return <div>Loading...</div>;
  //   if (error) return <div>{error}</div>;
  //   if (!family) return null;

  return <>{family?.name}</>;
};

export default PublicFamilyPage;
