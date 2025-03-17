import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-700 h-20 flex justify-between items-center px-10">
        <Link to="/">
          <div className="text-white  text-2xl p-1 rounded-lg font-bold px-3">
            Pixel Forge
          </div>
        </Link>

        <Link to="/generateImage">
          <div className="text-white bg-transparent text-2xl p-1 rounded-lg font-bold px-3">
            Create Image ✨
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
