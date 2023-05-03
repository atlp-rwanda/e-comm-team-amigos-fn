import React from 'react';
import './style.scss';
import { FaTachometerAlt } from 'react-icons/fa';
import { FaBoxOpen } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
import cart from './cart.png';

function AsideBar() {
	return (
		<div className="aside-bar-container">
			<div className="cart-content">
				<img src={cart} alt="" />
				<h3>Amigos</h3>
			</div>
			<nav>
				<ul>
					<li>
						<a href="">
							<FaTachometerAlt className="fa" />
							Dashboard
						</a>
					</li>
					<li>
						<a href="">
							<FaBoxOpen className="fa" />
							Product
						</a>
					</li>
					<li>
						<a href="">
							<FaChartBar className="fa" />
							Statistics
						</a>
					</li>
					<li>
						<a href="">
							<FaFileAlt className="fa" />
							Reports
						</a>
					</li>
					<div className="down-content">
						<li>
							<a href="">
								<AiOutlineSetting className="fa" />
								Settings
							</a>
						</li>
						<li>
							<a href="">
								<AiOutlineLogout className="fa" />
								Logout
							</a>
						</li>
					</div>
				</ul>
			</nav>
		</div>
	);
}

export default AsideBar;
