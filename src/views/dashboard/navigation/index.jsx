import React from 'react';
import Header from '../header/index.jsx';
import AsideBar from '../asideBar/index.jsx';
import { Outlet } from 'react-router-dom';
import './style.scss';

function DashboardNav() {
  return (
    <div className='dashboard-container'>
        <AsideBar/>
        <div className='main-layout'>
          <Header/>
          <Outlet/>
        </div>
    </div>
  );
}

export default DashboardNav