import Header from "../header/index.jsx";
import AsideBar from "../asideBar/index.jsx";
import { Outlet } from "react-router-dom";
import "./style.scss";

const  DashboardNav = ({socket}) => {
  return (
    <div className='dashboard-container'>
        <AsideBar/>
        <div className='main-layout'>
          <Header socket={socket}/>
          <Outlet />
        </div>
    </div>
  );
}

export default DashboardNav;
