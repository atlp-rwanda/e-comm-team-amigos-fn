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

function HeaderNav() {
	const [user, setUser] = useState({});
	useEffect(() => {
		const fetchProfile = async () => {
			setUser(await getUserProfile());
		};
		fetchProfile();
	}, []);
	return (
		<div className="header-container">
			<div className="filter-section">
				<SearchInput />
			</div>
			<div className="profile-section">
				<div className="profile-element">
					<div className="notifications">
						<BiBell
							className="bell-icon"
							size={28}
							color="#CCCCCC"
						/>
						<div className="notification-count">
							<span>5</span>
						</div>
					</div>

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
