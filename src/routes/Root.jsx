import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#f5f4f4] py-10 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
