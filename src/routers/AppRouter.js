import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';


const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" component={Home} exact={true} />
		<Route path="/Portfolio" component={Portfolio} exact={true} />			
		<Route path="/Portfolio/:id" component={PortfolioItem} />
					<Route path="/contact" component={Contact} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default AppRouter;