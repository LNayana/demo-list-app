import React from 'react';

const Option = (props) => (
		<div>
			<p>{props.optionText}</p>
		<button onClick={(e)=>props.handleRemoveOption(props.optionText)}>Remove </button>
		</div>
);

export default Option;