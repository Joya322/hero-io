import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div className="">
      <Navbar />
      <div className="bg-[#f5f4f4]">
        <div className="w-11/12 mx-auto py-10 ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
