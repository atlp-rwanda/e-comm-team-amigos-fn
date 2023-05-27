import React, { useEffect, useState } from "react";
import { FaUserCog, FaShoppingCart } from "react-icons/fa";
import { BsShop } from "react-icons/bs";

import {
	getRoles,
	getUser,
	addRole,
	removeRole,
} from "../../redux/roles/actions";
import { useDispatch, useSelector } from "react-redux";
import "./roles.styles.scss";
import "../../App.css";
import Button from "../Button/Button.jsx";

const RoleButton = ({
	roles,
	user,
	onAddOrRemoveRole,
	addOrRemovingRole,
	role,
	rolePos,
}) => {
	return (
		<Button
			data-roleid={roles[+rolePos].id}
			data-isset={user.userRoles.includes(role)}
			isSet={user.userRoles.includes(role)}
			onClick={onAddOrRemoveRole}
			disabled={(addOrRemovingRole && true) || false}
		>
			{user.userRoles.includes(role)
				? `Remove ${role} Role`
				: `Add ${role} Role`}
		</Button>
	);
};

export default function Roles({socket}) {
	const dispatch = useDispatch();
	const { errorMsg, fetchingUser, addOrRemovingRole, user, roles, addRoleSuccessInfo, removeRoleSuccessInfo } =
		useSelector((state) => state.roles);
	const [email, setEmail] = useState("");
	function handleOnChangeSearch(e) {
		setEmail(e.target.value);
	}

	function handleOnClick() {
		dispatch(getUser(email));
	}

	function onAddOrRemoveRole(e) {
		const { roleid } = e.target.dataset;
		const { isset } = e.target.dataset;

		(isset === "false" && dispatch(addRole(user?.id, roleid))) ||
			dispatch(removeRole(user?.id, roleid));
	}

	const loggedInUser = JSON.parse(localStorage.getItem("user"));
	const handleNotification = (userId, roleId, title, body) => {
		socket?.emit("sendNotification", {
			receiverId: userId,
			firstName:loggedInUser.firstName,
			lastName:loggedInUser.lastName,
			title: title,
    		description: `${loggedInUser.firstName} ${loggedInUser.lastName} ${body} ${roleId}.`
			})
		}

	useEffect(() => {
		if(addRoleSuccessInfo?.status === 201){
			handleNotification(addRoleSuccessInfo?.data?.response?.userId, addRoleSuccessInfo?.data?.response?.roleId, `You have assigned a new role`, `has assigned a new role to you which has id`);
		}
		if(removeRoleSuccessInfo?.status === 200){
			handleNotification(user?.id, user?.id, `You have re-assigned a new role`, `has re-assigned a new role to you which has id`);
		}
		dispatch(getRoles());
	}, [dispatch, addRoleSuccessInfo, removeRoleSuccessInfo]);

	return (
		<div className="manage-roles-container">
			<h2>Manage Roles</h2>
			<div className="supported-roles">
				<p>The system support three types of roles.</p>
				<ul>
					<li>
						<FaUserCog className="roles-icon" />
						Admin
					</li>
					<li>
						<BsShop className="roles-icon" />
						Merchant
					</li>
					<li>
						<FaShoppingCart className="roles-icon" />
						Customer
					</li>
				</ul>
			</div>

			<h3>Add / Remove Role to a User</h3>

			<div className="user-roles">
				<div className="user-roles-search-box">
					<Button
						disabled={email.length > 1 ? false : true}
						onClick={handleOnClick}
					>
						{fetchingUser ? (
							<div className="loading-spinner loading-spinner--md"></div>
						) : (
							"Search"
						)}
					</Button>
					<input
						type="email"
						className="form-input"
						placeholder="Enter user's email"
						value={email}
						onChange={handleOnChangeSearch}
					/>
				</div>
				{user && (
					<>
						<div className="user">
							<h2 className="user__name">{user.name}</h2>
							<p className="user__email">{user.email}</p>
						</div>

						<div className="set-roles">
							<div className="roles-of-user">
								<ol className="my-roles">
									{user.userRoles.map((name, i) => {
										return <li key={i}>{name}</li>;
									})}
								</ol>
							</div>

							<div className="updateUserRoleContainer">
								<RoleButton
									roles={roles}
									user={user}
									onAddOrRemoveRole={onAddOrRemoveRole}
									addOrRemovingRole={addOrRemovingRole}
									role="admin"
									rolePos="0"
								/>

								<RoleButton
									roles={roles}
									user={user}
									onAddOrRemoveRole={onAddOrRemoveRole}
									addOrRemovingRole={addOrRemovingRole}
									role="merchant"
									rolePos="1"
								/>

								<RoleButton
									roles={roles}
									user={user}
									onAddOrRemoveRole={onAddOrRemoveRole}
									addOrRemovingRole={addOrRemovingRole}
									role="customer"
									rolePos="2"
								/>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
