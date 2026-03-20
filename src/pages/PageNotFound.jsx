import { useLocation, useNavigate } from "react-router";
import img1 from "../assets/App-Error.png";
import img2 from "../assets/error-404.png";
import { useEffect, useState } from "react";

const PageNotFound = () => {
  const [info, setInfo] = useState({});
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/app-not-found") {
      const newInfo = {
        title: "OOPS!! APP NOT FOUND",
        description:
          "The App you are requesting is not found on our system. Please try another apps.",
        image: img1,
      };
      setInfo(newInfo);
    } else {
      const newInfo = {
        title: "OOPS, page not found!",
        description: "The page you are looking for is not available",
        image: img2,
      };
      setInfo(newInfo);
    }
  }, [pathname]);

  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-3 text-center">
      <div>
        <img src={img1} alt="" />
      </div>
      <h1 className="text-4xl font-bold">{info.title}</h1>
      <p className="opacity-70">{info.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="btn bg-linear-to-br from-violet-800 to-violet-400 text-white"
      >
        Go Back!
      </button>
    </div>
  );
};

export default PageNotFound;
