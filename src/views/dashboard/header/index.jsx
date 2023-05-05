import React from "react";
import SearchInput from "../../../components/SearchInput.jsx";
import profilePic  from "../../../assets/img/profile.png";
import { BiBell } from 'react-icons/bi';
import './style.scss';

function HeaderNav() {
  return (
    <div className="header-container">
      <div className="filter-section">
        <SearchInput />
      </div>
      <div className="profile-section">
        <div className="profile-element">
            <div className="notifications">
              <BiBell className="bell-icon" size={28} color="#CCCCCC" />
              <span className="notification-count">5</span>
            </div>
            <img className="avatar" src={profilePic} alt="Profile picture" />
          <div className="user-identity">
            <span className="user-name">Emile Shumbusho</span>
            <span className="user-email">shumbushoemile@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
