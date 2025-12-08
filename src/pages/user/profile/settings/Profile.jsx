import { useAuth } from "../../../../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
