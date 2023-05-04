import React from 'react';
import './users.style.scss';
import nextIcon from '../../assets/svg/next.svg';
import prevIcon from '../../assets/svg/prev.svg';
import usersIcon from '../../assets/svg/account-group.svg';

export default function Users() {
	return (
		<div className="users">
			<h1 className="users-header">
				<img src={usersIcon} className="users-icon" alt="Prev Logo" />
				Users
			</h1>
			<div className="users-table-container">
				<table className="users-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Roles</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>maria@example.com</td>
							<td>Admin</td>
						</tr>
						<tr>
							<td>David</td>
							<td>david@example.com</td>
							<td>Merchant, Customer</td>
						</tr>
						<tr>
							<td>Cyusa</td>
							<td>cyusa@example.com</td>
							<td>Merchant</td>
						</tr>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>maria@example.com</td>
							<td>Admin</td>
						</tr>
						<tr>
							<td>David</td>
							<td>david@example.com</td>
							<td>Merchant, Customer</td>
						</tr>
						<tr>
							<td>Cyusa</td>
							<td>cyusa@example.com</td>
							<td>Merchant</td>
						</tr>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>maria@example.com</td>
							<td>Admin</td>
						</tr>
						<tr>
							<td>David</td>
							<td>david@example.com</td>
							<td>Merchant, Customer</td>
						</tr>
						<tr>
							<td>Cyusa</td>
							<td>cyusa@example.com</td>
							<td>Merchant</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="users__pagination">
				<img
					src={prevIcon}
					className="pagination-icon"
					alt="Prev Logo"
				/>
				<span className="current-page">1/50</span>
				<img
					src={nextIcon}
					className="pagination-icon"
					alt="Next Logo"
				/>
			</div>
		</div>
	);
}
