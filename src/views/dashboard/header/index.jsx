import SearchInput from "../../../components/search/SearchInput.jsx";
import HumburgerMenu from "../../../components/humberger-menu/index.jsx";
import { BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PopupMenu } from "react-simple-widgets";
import * as Unicons from "@iconscout/react-unicons";
import "./style.scss";
import Avatar from "@mui/material/Avatar";
import getUserProfile from "../../../utils/getUserProfile.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Separetor } from "../../../components/sparetor/index.jsx";
import { FaUser } from "react-icons/fa";
import { formatDate } from "../../../utils/date/index.js";

function HeaderNav({socket}) {
    const [notifications, setNotifications] = useState([]);
    const unReadNotification = Array.from(notifications.values()).filter((notification)=> !notification.isRead);
    const api = axios.create({
      baseURL: "https://e-comm-team-amigos-bn-project.onrender.com",
      headers: {
        common: {
          "Content-Type": "application/json",
        },
      },
    });
  
    const fetchNotification =() => {
      const token = localStorage.getItem("token");
        api.get(`/notification`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            setNotifications(response.data.data.notification);
  
          })
          .catch((error) => {
          });
    };

    const markNotification =() => {
      const token = localStorage.getItem("token");
        api.get(`/notification/mark`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            setNotifications([]);
          })
          .catch((error) => {
            console.log(error.message);
          });
    };

	const [user, setUser] = useState({});
	useEffect(() => {
		const fetchProfile = async () => {
			setUser(await getUserProfile());
		};
		fetchProfile();
    socket?.on("getNotification", (data)=>{
      setNotifications((prev)=> [...prev, data]);
    })
    fetchNotification();
	}, [socket]);
	return (
		<div className="header-container">
			<div className="filter-section">
				<SearchInput />
			</div>
			<div className="profile-section">
				<div className="profile-element">
        <PopupMenu>
              <button className="dropDownMenu">
                <div className="notifications">
                  <BiBell className="bell-icon" size={28} color="#CCCCCC" />
                  {unReadNotification.length !== 0 && 
                    <div className="notification-count">
                    <span>{unReadNotification.length}</span>
                  </div>
                  }
                </div>
              </button>
              
              <div className="notificationDropDownCard">
                {unReadNotification.length !== 0 && <>
                  <div className="notifications-header">
                    <span className="notification-title">Notifications</span>
                    <button onClick={()=>markNotification()} className="mark-all">
                      Mark all as read
                    </button>
                  </div>
                  <div className="notifications-body-container">
                  {unReadNotification?.map((notification, index)=>{
                    return (
                      <div key={index}>
                        <div className="notifications-body">
                          <div  className="notifications-body-header">
                            <div>
                              <FaUser color="#C5C5C5" size={"14px"}/>
                              <span style={{color:"#C5C5C5", fontSize:"14px", marginLeft:"5px"}}>{notification?.firstName} {notification?.lastName}</span>
                            </div>
                            <span style={{color:"#C5C5C5", fontSize:"14px"}}>{formatDate(notification?.createdAt)}</span>
                          </div>
                          <span style={{color:"#096E3E", fontSize:"14px"}} className="notification-title">{notification?.title}</span>
                          <span className="notification-description">{notification?.description || notification?.body}</span>
                          </div>
                          <Separetor/>
                        </div>
                    )
                  })}
                </div>
               </>
              }
              </div>
            </PopupMenu>
            <PopupMenu>
              <button className="dropDownMenu">
                <div className="user-profile">
                  <Avatar className="avatar">
                    {user?.firstName?.substr(0, 1)}
                  </Avatar>
                  <div className="user-identity">
                    <span className="user-name">{`${user?.firstName} ${user?.lastName}`}</span>
                    <span className="user-email">
                      {user?.email}
                    </span>
                  </div>
                </div>
              </button>
              <div className="dropDownCard">
                <div className="menu-list d-lg-none">
                  <div className="user-identity d-sm-flex">
                    <span className="user-name">{`${user?.firstName} ${user?.lastName}`}</span>
                    <span className="user-email">
                      {user?.email}
                    </span>
                  </div>
                </div>
                <div className="menu-list">
                  <Link
                    to={"/dashboard/update-password"}
                    className="menu-title"
                  >
                    Change Password
                  </Link>
                  <Unicons.UilAngleRight
                    size="24"
                    color="#848181"
                  />
                </div>
                <div className="menu-list">
                  <Link className="menu-title">Profile</Link>
                  <Unicons.UilAngleRight
                    size="24"
                    color="#848181"
                  />
                </div>
              </div>
            </PopupMenu>
					{/* <div className="user-identity">
							<span className="user-name">{`${user?.firstName} ${user?.lastName}`}</span>
							<span className="user-email">{user?.email}</span>
						</div> */}
					<div className="menu-container">
						<HumburgerMenu />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderNav;
