import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div className="container m-auto">
        <NavBar></NavBar>
      {/* <div className="relative z-50 lg:absolute lg:w-screen 2xl:absolute  2xl:w-[1530px] xl:absolute xl:w-[1275px]">
      </div> */}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;