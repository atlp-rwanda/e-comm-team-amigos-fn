import React from 'react';
import Header from '../header/index.jsx';
import AsideBar from '../asideBar/index.jsx';

function DashboardNav() {
  return (
    <div style={{display:'flex'}}>
        <AsideBar/>
        <Header/>
    </div>
  );
}

export default DashboardNav