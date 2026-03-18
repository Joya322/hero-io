import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div className="">
      <Navbar />
      <div className="relative bg-[#f5f4f4] py-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
