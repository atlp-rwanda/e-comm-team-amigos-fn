import React from 'react';
import { FaTachometerAlt } from 'react-icons/fa';
import { FaBoxOpen } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import cart from '../../../assets/img/cart.png';
import './style.scss';

function AsideBar() {
	return (
		<div className='aside-bar'>
			<div className="aside-bar-container">
				<div className="cart-content">
					<img src={cart} alt="" />
					<h3>Amigos</h3>
				</div>
				<nav>
					<ul>
						<li>
							<Link>
								<FaTachometerAlt className="fa" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link>
								<FaBoxOpen className="fa" />
								Product
							</Link>
						</li>
						<li>
							<Link>
								<FaChartBar className="fa" />
								Statistics
							</Link>
						</li>
						<li>
							<Link>
								<FaFileAlt className="fa" />
								Reports
							</Link>
						</li>
						<div className="down-content">
							<li>
								<Link>
									<AiOutlineSetting className="fa" />
									Settings
								</Link>
							</li>
							<li>
								<Link>
									<AiOutlineLogout className="fa" />
									Logout
								</Link>
							</li>
						</div>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default AsideBar;
