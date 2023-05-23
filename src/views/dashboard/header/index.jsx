import React from 'react';
import SearchInput from "../../../components/search/SearchInput.jsx";
import HumburgerMenu from "../../../components/humberger-menu/index.jsx";
import profilePic  from "../../../assets/img/profile.png";
import { BiBell } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {PopupMenu} from "react-simple-widgets"
import * as Unicons from "@iconscout/react-unicons";
import './style.scss';

function HeaderNav() {
  return (
    <>
      <div className="header-container">
        <div className="filter-section">
          <SearchInput />
        </div>
        <div className="profile-section">
          <div className="profile-element">
              <div className="notifications">
                <BiBell className="bell-icon" size={28} color="#CCCCCC" />
                <div className="notification-count">
                  <span>5</span>
                </div>
              </div>
              <div className="user-profile">
                <img className="avatar" src={profilePic} alt="Profile picture" />
                <div className="user-identity">
                  <span className="user-name">Emile Shumbusho</span>
                  <span className="user-email">shumbushoemile@gmail.com</span>
                </div>
                <PopupMenu>
                    <button className="dropDownMenu">
                      <Unicons.UilAngleDown size="24" color="#848181" />
                    </button>
                    <div className="dropDownCard">
                      <div className='menu-list'>
                      <Link to={"/dashboard/update-password"} className="menu-title">Change Password</Link>
                        <Unicons.UilAngleRight size="24" color="#848181" />
                      </div>
                      <div className='menu-list'>
                        <Link className="menu-title">Profile</Link>
                        <Unicons.UilAngleRight size="24" color="#848181" />
                      </div>
                    </div>
                  </PopupMenu>
                <div className="menu-container">
                  <HumburgerMenu/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderNav;