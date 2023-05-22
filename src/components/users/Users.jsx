import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/users/action";
import "./users.style.scss";
import "./../../App.css";
import nextIcon from "../../assets/svg/next.svg";
import prevIcon from "../../assets/svg/prev.svg";
import usersIcon from "../../assets/svg/account-group.svg";

const TableData = ({ children, ...otherProps }) => {
	return <td {...otherProps}>{children}</td>;
};

const TableRaw = ({ data }) => {
	const tds = Object.values(data).map((datum, i) => (
		<TableData key={i}>{datum}</TableData>
	));
	return <tr>{tds}</tr>;
};

const TableHeader = ({ headers }) => {
	const ths = headers.map((header, i) => <th key={i}>{header}</th>);
	return (
		<thead>
			<tr>{ths}</tr>
		</thead>
	);
};

const Pagination = ({ users, currPage, handleOnClick, totalPages }) => {
	return (
		<div className="users__pagination">
			{users && currPage !== 1 && (
				<img
					src={prevIcon}
					className="pagination-icon"
					onClick={handleOnClick}
					id="prev"
					alt="Prev Logo"
				/>
			)}
			{users && (
				<span className="current-page">
					{currPage}/{totalPages}
				</span>
			)}

			{users && currPage !== totalPages && (
				<img
					src={nextIcon}
					onClick={handleOnClick}
					id="next"
					className="pagination-icon"
					alt="Next Logo"
				/>
			)}
		</div>
	);
};

function handleOnClick(e, dispatch, currPage) {
	dispatch({
		type: "CHANGE_PAGE",
		payload: e.target.id === "prev" ? currPage - 1 : currPage + 1,
	});
}

function generateRows(users) {
	return users.map((user, i) => {
		const userRoles = user.UserRoles.map((role) => role.Role.name).join(
			", ",
		);

		const data = {
			name: `${user.firstName} ${user.lastName}`,
			email: user.email,
			userRoles,
		};

		return <TableRaw key={i} data={data} />;
	});
}

const Header = () => {
	return (
		<h1 className="users-header">
			<img src={usersIcon} className="users-icon" alt="Prev Logo" />
			Users
		</h1>
	);
};

const Table = ({ users }) => {
	return (
		<table className="users-table">
			<TableHeader headers={["Name", "Email", "Roles"]} />
			<tbody>{users && generateRows(users)}</tbody>
		</table>
	);
};

export default function Users() {
	const dispatch = useDispatch();
	const { users, fetchingUsers, currPage, totalPages } = useSelector(
		(state) => state.users,
	);

	useEffect(() => {
		if (!users) dispatch(getUsers(currPage));
	}, [dispatch, currPage, users]);

	return (
		<div className="users">
			<Header />
			<div className="users-table-container">
				<Table users={users} />
				{fetchingUsers && (
					<div className="loading-spinner loading-spinner--medium"></div>
				)}
			</div>

			<Pagination
				users={users}
				currPage={currPage}
				handleOnClick={(e) => handleOnClick(e, dispatch, currPage)}
				totalPages={totalPages}
			/>
		</div>
	);
}
