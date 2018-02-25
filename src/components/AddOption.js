import React from 'react';

export default class AddOption extends 
React.Component{
	state = {
			error:undefined
		};
	
	handleAddOption=(e)=>{
		e.preventDefault();
		
		const option = e.target.elements.newoption.value.trim(); 
		const error = this.props.handleAddNewOption(option);
		
		this.setState(()=> ({error}));
		
		if(!error){
			e.target.elements.newoption.value='';
		}
	};

	render(){
		return(
			<div>
			{this.state.error && <p style={{color:'red'}}>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="newoption" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}