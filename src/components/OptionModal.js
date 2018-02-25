import React from 'react';
import Modal from 'react-modal';

//using shorthand syntax for arrow function
//!!props.selectedOptions is a true boolean
const OptionModal = (props) =>(
		<Modal
			isOpen={!!props.selectedOption}
			contentLabel="Selected Option"
			onRequestClose={props.handleClearSelectedOption}
			closeTimeoutMS={200}
    		className="modal"
		>
			<h3 className="modal__title">Selected Option</h3>
			{props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
			<button className="button" onClick={props.handleClearSelectedOption}>Ok</button>
		</Modal>
);

export default OptionModal;