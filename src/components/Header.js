import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () =>{
	return (
		<div className="header">
				<div className="container">
					<h1 className="header__title">My Portfolio</h1>
				</div>
				<div>
					<ul>
						<li>
							<NavLink activeClassName='active' to="/" exact={true}> Home</NavLink>
						</li>
						<li>
							<NavLink activeClassName='active' to="/portfolio"> Portfolio </NavLink>
						</li>
						<li>	
							<NavLink activeClassName='active' to="/contact"> Contact </NavLink>
						</li>
					</ul>
				</div>
		</div>
	);
};

export default Header;