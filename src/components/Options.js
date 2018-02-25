import React from 'react';
import Option from './Option';


const Options = (props) => {
	return(
			<div>
				<button onClick={props.handleRemoveAll}>Remove All</button>
		{props.options.length ===0 && <p>please add an option</p>}
		{props.options.map(
			(option) => (
				<Option key={option} optionText={option} 
				handleRemoveOption = {props.handleRemoveOption}
				/> )
		)}
				
			</div>
		);
};

export default Options;