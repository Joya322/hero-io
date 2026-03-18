import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const activePath = {
    color: "#6e11b0",
    borderBottom: "2px solid #6e11b0",
    display: "inline-block",
  };

  const links = (
    <span className="flex flex-col lg:flex-row justify-center lg:items-center gap-5 font-medium">
      <Link to="/">
        <li className="w-auto" style={path === "/" ? activePath : {}}>
          Home
        </li>
      </Link>
      <Link to="/apps">
        <li style={path === "/apps" ? activePath : {}}>Apps</li>
      </Link>
      <Link to="/installation">
        <li style={path === "/installation" ? activePath : {}}>Installation</li>
      </Link>
    </span>
  );

  return (
    <div className=" shadow-md">
      <div className="w-11/12 mx-auto navbar bg-base-100 px-0 flex justify-between items-center">
        <div className="flex">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-violet-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
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
    </div>
  );
};

export default Navbar;
