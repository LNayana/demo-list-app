import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = (props) =>{
	return (
		<div>
			<h1>My Portfolio</h1>
			<Link to="/portfolio/1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQ6Te9vk9Ig4axQmkF9M7Oqob0e7JRVqspISXyRngkzTbJ-DkUw" width={284} height={177} alt="project 1"/></Link>
    		<br/>
			<Link to="/portfolio/2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7j55XjuVbUe95UAhQzaEvSkUaeuIi80XjbcgkPzsd-7k5nL3" width={284} height={177} alt="project 2" /></Link>
		</div>
	);
};

export default Portfolio;