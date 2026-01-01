import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useState } from "react";
import useDetectTheme from "../../hooks/useDetectTheme";

const UserPreferencesSettings = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const isDark = useDetectTheme();

  


  return (
    <div className="p-3">
      Theme Select
      <div className="flex gap-5 p-1">
        <div className="outline outline-black/30 outline-offset-3 rounded">
          <div className="w-24 border border-black/10 rounded h-10 rounded flex justify-center items-center text-3xl  transition">
            <MdOutlineLightMode />
          </div>
        </div>

        <div className="w-24 h-10 bg-black rounded text-white flex justify-center items-center text-3xl hover:shadow-sm hover:bg-black/80 transition">
          <MdDarkMode />
        </div>
      </div>
    </div>
  );
};

export default UserPreferencesSettings;
