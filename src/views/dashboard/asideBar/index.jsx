import React, { useState } from 'react';
import { FaTachometerAlt } from 'react-icons/fa';
import { FaBoxOpen } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import cart from '../../../assets/img/cart.png';
import './style.scss';
import { useSelector } from 'react-redux';

function AsideBar() {
	const {isClicked} = useSelector((state)=> state.handleClickState);
	const [active, setActive] = useState("Dashboard");
	return (
		<div className='aside-bar' style={{display: isClicked ? 'none' : 'block',}}>
			<div className="aside-bar-container">
				<div className="cart-content">
					<img src={cart} alt="" />
					<h3>Amigos</h3>
				</div>
				<nav>
					<ul>
						<li>
							<Link style={{color: active === "Dashboard"? "#fff" : ""}} to={"dashboard"} className='link' onClick={()=> setActive("Dashboard")}>
								<FaTachometerAlt className="fa" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link onClick={()=> setActive("Product")} style={{color: active === "Product"? "#fff" : ""}} to={"product"} className='link'>
								<FaBoxOpen className="fa" />
								Product
							</Link>
						</li>
						<li>
							<Link onClick={()=> setActive("Statistics")} style={{color: active === "Statistics"? "#fff" : ""}} className='link'>
								<FaChartBar className="fa" />
								Statistics
							</Link>
						</li>
						<li>
							<Link onClick={()=> setActive("Reports")} style={{color: active === "Reports"? "#fff" : ""}} className='link'>
								<FaFileAlt className="fa" />
								Reports
							</Link>
						</li>
						<div className="down-content">
							<li>
								<Link onClick={()=> setActive("Settings")} style={{color: active === "Settings"? "#fff" : ""}} className='link'>
									<AiOutlineSetting className="fa" />
									Settings
								</Link>
							</li>
							<li>
								<Link onClick={()=> setActive("Logout")} style={{color: active === "Logout"? "#fff" : ""}} className='link'>
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
