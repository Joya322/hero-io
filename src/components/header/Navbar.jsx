import { Link, useLocation } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { RiMenuFold4Fill, RiMenuUnfold4Fill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  const activePath = "text-violet-600 border-b border-violet-600";

  const links = (
    <>
      <li>
        <Link to="/">
          <span className={`${path === "/" ? activePath : ""}`}>Home</span>
        </Link>
      </li>
      <li>
        <Link to="/apps">
          <span className={` ${path === "/apps" ? activePath : ""}`}>Apps</span>
        </Link>
      </li>
      <li>
        <Link to="/installation">
          <span className={` ${path === "/installation" ? activePath : ""}`}>
            Installation
          </span>
        </Link>
      </li>
    </>
  );
  // className =
  //   "flex flex-col lg:flex-row justify-center lg:items-center gap-5 font-medium ";
  return (
    <nav className="shadow-md bg-base-100">
      <div className="navbar w-11/12 mx-auto  px-0 flex justify-between items-center">
        {/* left section: logo + menu icon */}
        <div className="flex gap-1">
          <details open={isOpen} className="dropdown lg:hidden">
            <summary
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
              className="btn btn-ghost p-2"
            >
              {isOpen ? (
                <RiMenuUnfold4Fill className="h-6 w-6 text-violet-600" />
              ) : (
                <RiMenuFold4Fill className="h-6 w-6 text-violet-600" />
              )}
            </summary>

            <ul className="menu  dropdown-content bg-base-100 rounded-box z-1 w-50 p-2 shadow-sm mt-3">
              {links}
            </ul>
          </details>
          <Link className="flex justify-center items-center gap-1">
            <img src={logo} width={40} height={40} alt="" />{" "}
            <span className="text-violet-600 font-semibold">HERO.IO</span>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <a
          href="https://github.com/Joya322"
          target="_blank"
          className="btn bg-linear-to-br from-violet-800 to-violet-400 text-white"
        >
          <FaGithub />
          Contribute
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
