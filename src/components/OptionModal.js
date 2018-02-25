import React from 'react';
import Modal from 'react-modal';

//using shorthand syntax for arrow function
//!!props.selectedOptions is a true boolean
const OptionModal = (props) =>(
		<Modal
			isOpen={!!props.selectedOption}
			contentLabel="Selected Option"
			onRequestClose={props.handleClearSelectedOption}
		>
			<h3>Selected Option</h3>
			{props.selectedOption && <p>{props.selectedOption}</p>}
			<button onClick={props.handleClearSelectedOption}>Ok</button>
		</Modal>
);

export default OptionModal;