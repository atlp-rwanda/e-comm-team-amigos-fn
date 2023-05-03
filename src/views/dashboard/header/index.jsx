import React from "react";
import './style.scss';

function HeaderNav() {
  return (
    <div className="header-container">
      <div className="filter-section">
        <input type="text" placeholder="Search for a product"/>
      </div>
      <div className="profile-section">
        <div className="avatar">
            <h1>Emile</h1>
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
