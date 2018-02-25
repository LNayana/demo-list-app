import React from 'react';
import Header from './Header'; // Its a default export
import {Action} from './Action'; // Its a named export
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class DemoApp extends React.Component {
	state = {
			options:[],
			selectedOption:undefined
		};
	
	handleRemoveAll= ()=> {
		this.setState( () => ({options:[]}));
	};
	
	handleRemoveOption = (optionToRemove)=>{
		this.setState((prevState)=>({
			options: prevState.options.filter((option)=> {return optionToRemove !== option;})
		}));
	};
	
	handleAddNewOption= (option)=>{ 
		if(!option){
			return 'Please enter valid option';
		}
		else if(this.state.options.indexOf(option)> -1){
			return 'Value already exists';
		}
		this.setState((prevState) => ({options: prevState.options.concat(option)}));	
	};
	
	handlePickOne=()=>{
		const randomNum = Math.floor(Math.random() * this.state.options.length);
    	const option = this.state.options[randomNum];
    	//using updated function
		this.setState(()=>({
			selectedOption:option
		}));
	};
	
	handleClearSelectedOption = () =>{
		this.setState(()=>({
			selectedOption:undefined
		}));	
	};
	
	componentDidMount(){ 
		try{
			const json = localStorage.getItem('options');
			const options =JSON.parse(json);
		
			if(options){
				this.setState(()=>({options}));
			}
		}catch(error){
			
		}
	}
	
	componentDidUpdate(prevProps,prevState){
		if(prevState.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options',json);
		}
	}
	
	componentWillUnmount(){
		console.log('component will unmount');
	}
	
	render() {
		const title ="My React App";
		const subTitle ="Enjoy React Programming!";
		return ( 
			<div>
        <Header title={title} subtitle={subTitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePickOne={this.handlePickOne}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleRemoveAll={this.handleRemoveAll}
              handleRemoveOption={this.handleRemoveOption}
            />
            <AddOption
              handleAddNewOption={this.handleAddNewOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
		);
	}
}

DemoApp.defaultProps = {
	options:[]
};