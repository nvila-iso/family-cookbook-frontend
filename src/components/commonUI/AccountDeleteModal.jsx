import { useNavigate } from "react-router";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const AccountDeleteModal = ({ setDeleteModal }) => {
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    setError(null);
    setIsDeleting(true);

    try {
      const res = await fetch(`http://localhost:5000/api/users/${user.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 204) {
        logout();
        navigate("/");
        return;
      }

      const data = await res.json();
      setError(data.error || "Failed to delete account");
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="absolute inset-y-70 inset-x-0 flex items-center justify-center z-50">
        <div className="fade-in bg-white w-sm h-40 flex flex-col justify-center items-center shadow-sm rounded gap-3">
          <p>Are you sure you want to do this?</p>
          <button
            className="flex gap-1 justify-center items-center bg-red-300 rounded px-2 py-1 h-12 w- mx-auto"
            onClick={() => handleDeleteAccount()}
            disabled={isDeleting}
          >
            <MdDeleteForever />
            {isDeleting ? "Deleting..." : "Delete Account"}
          </button>
          <button
            className="bg-black text-white px-2 py-1 hover:bg-black/60"
            onClick={() => setDeleteModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountDeleteModal;
