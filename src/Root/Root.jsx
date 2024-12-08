import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar/NavBar";
import Footer from "../components/shared/NavBar/Footer";

const Root = () => {
  return (
    <div className="bg-gradient-to-br  min-h-screen from-pink-50 to-orange-50 hover:bg-gradient-to-bl ">
      <NavBar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Root;
