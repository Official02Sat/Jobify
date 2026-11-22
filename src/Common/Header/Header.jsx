import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Cookies from "js-cookie";
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onClickLogOut = () => {
    Cookies.remove("jwtToken");
    navigate("/login");
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-800 h-20 text-white flex items-center justify-between px-6 md:px-16 w-full sticky top-0 z-50 border-b border-slate-700">
      {/* logo */}
      <Link to="/" onClick={() => setIsOpen(false)}>
        <img src={Logo} alt="website logo" className="h-10 md:h-12 object-contain" />
      </Link>

      {/* desktop nav links */}
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <li>
          <Link to="/" className="hover:text-indigo-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="hover:text-indigo-400">
            Jobs
          </Link>
        </li>
      </ul>

      {/* desktop logout button */}
      <button
        type="button"
        onClick={onClickLogOut}
        className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-md transition"
      >
        Logout
      </button>

      {/* mobile hamburger button */}
      <button
        type="button"
        className="md:hidden text-white"
        onClick={toggleNavbar}
      >
        {isOpen ? <RxCross2 size={28} /> : <IoReorderThree size={32} />}
      </button>

      {/* mobile menu dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-slate-800 border-b border-slate-700 flex flex-col items-center py-4 gap-4 md:hidden">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium hover:text-indigo-400"
          >
            Home
          </Link>
          <Link
            to="/jobs"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium hover:text-indigo-400"
          >
            Jobs
          </Link>
          <button
            type="button"
            onClick={onClickLogOut}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
