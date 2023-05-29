import { useState } from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaUsers, FaMinusCircle } from "react-icons/fa";
import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import cart from "../../../assets/img/cart.png";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import logout from "../../../utils/logout";
import action from "../../../redux/actions/action";
import { IS_CLICKED } from "../../../redux/types";

function getUserRole() {
	const user = JSON.parse(localStorage.getItem("user"));
	return user?.userRoles || [];
}

function AsideBar() {
	const { isClicked } = useSelector((state) => state.handleClickState);
	const [active, setActive] = useState("Dashboard");
	const displayClass = isClicked ? "d-sm-flex" : "";

	const dispatch = useDispatch();
	const closeMenu = () => dispatch(action(IS_CLICKED, false));

	return (
		<div className={`aside-bar d-sm-none ${displayClass}`}>
			<div className="aside-bar-container">
				<div className="cart-content">
					<img src={cart} alt="" />
					<h3>Amigos</h3>
				</div>
				<nav className="aside-bar-content">
					<ul>
						<li>
							<Link
								style={{
									color: active === "Dashboard" ? "#fff" : "",
								}}
								to={"/dashboard"}
								className="link"
								onClick={() => {
									setActive("Dashboard");
									closeMenu();
								}}
							>
								<FaTachometerAlt className="fa" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link
								onClick={() => {
									setActive("Product");
									closeMenu();
								}}
								style={{
									color: active === "Product" ? "#fff" : "",
								}}
								to={"product"}
								className="link"
							>
								<FaBoxOpen className="fa" />
								Product
							</Link>
						</li>
						<li>
							<Link
								onClick={() => {
									setActive("Statistics");
									closeMenu();
								}}
								style={{
									color:
										active === "Statistics" ? "#fff" : "",
								}}
								className="link"
							>
								<FaChartBar className="fa" />
								Statistics
							</Link>
						</li>
						<li>
							<Link
								onClick={() => {
									setActive("Reports");
									closeMenu();
								}}
								style={{
									color: active === "Reports" ? "#fff" : "",
								}}
								className="link"
							>
								<FaFileAlt className="fa" />
								Reports
							</Link>
						</li>

						{getUserRole().includes("Admin") && (
							<li>
								<Link
									to="users"
									style={{
										color: active === "Users" ? "#fff" : "",
									}}
									className="link"
									onClick={() => {
										setActive("Users");
										closeMenu();
									}}
								>
									<FaUsers className="fa" />
									Users
								</Link>
							</li>
						)}

						{getUserRole().includes("Admin") && (
							<li>
								<Link
									to="roles"
									style={{
										color: active === "Roles" ? "#fff" : "",
									}}
									className="link"
									onClick={() => {
										setActive("Roles");
										closeMenu();
									}}
								>
									<FaMinusCircle className="fa" />
									Roles
								</Link>
							</li>
						)}
					</ul>

					<div className="down-content">
						<li>
							<Link
								onClick={() => {
									setActive("Settings");
									closeMenu();
								}}
								style={{
									color: active === "Settings" ? "#fff" : "",
								}}
								className="link"
							>
								<AiOutlineSetting className="fa" />
								Settings
							</Link>
						</li>
						<li>
							<Link
								onClick={() => {
									setActive("Logout");
									logout();

									closeMenu();
								}}
								style={{
									color: active === "Logout" ? "#fff" : "",
								}}
								className="link"
							>
								<AiOutlineLogout className="fa" />
								Logout
							</Link>
						</li>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default AsideBar;
