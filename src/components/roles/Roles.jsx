import React, { useEffect, useState } from 'react';
import { FaUserCog, FaShoppingCart } from 'react-icons/fa';
import { BsShop } from 'react-icons/bs';

import {
	getRoles,
	getUser,
	addRole,
	removeRole,
} from '../../redux/roles/actions';
import { useDispatch, useSelector } from 'react-redux';
import './roles.styles.scss';
import '../../App.css';
import Button from '../button/Button.jsx';

const RoleButton = ({
	roles,
	user,
	onAddOrRemoveRole,
	addOrRemovingRole,
	role,
}) => {
	return (
		<Button
			data-roleid={roles[0].id}
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

export default function Roles() {
	const dispatch = useDispatch();
	const { errorMsg, fetchingUser, addOrRemovingRole, user, roles } =
		useSelector((state) => state.roles);
	const [email, setEmail] = useState('');

	function handleOnChangeSearch(e) {
		setEmail(e.target.value);
	}

	function handleOnClick() {
		dispatch(getUser(email));
	}

	function onAddOrRemoveRole(e) {
		const { roleid } = e.target.dataset;
		const { isset } = e.target.dataset;

		(isset === 'false' && dispatch(addRole(user?.id, roleid))) ||
			dispatch(removeRole(user?.id, roleid));
	}

	useEffect(() => {
		dispatch(getRoles());
	}, [dispatch]);

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
							<div className="loading-spinner loading-spinner--sm"></div>
						) : (
							'Search'
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
							<p className="user__email">{user.enail}</p>
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
								/>

								<RoleButton
									roles={roles}
									user={user}
									onAddOrRemoveRole={onAddOrRemoveRole}
									addOrRemovingRole={addOrRemovingRole}
									role="merchant"
								/>

								<RoleButton
									roles={roles}
									user={user}
									onAddOrRemoveRole={onAddOrRemoveRole}
									addOrRemovingRole={addOrRemovingRole}
									role="customer"
								/>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
