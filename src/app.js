class DemoApp extends React.Component {
	constructor(props){
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
		this.handleAddNewOption = this.handleAddNewOption.bind(this);
		this.handlePickOne= this.handlePickOne.bind(this);
		this.state = {
			options:[]
		};
	}
	
	handleRemoveAll() {
		this.setState( () => {
			return{
				options:[]
			};
		});
	}
	
	handleAddNewOption(option){ 
		if(!option){
			return 'Please enter valid option';
		}
		else if(this.state.options.indexOf(option)> -1){
			return 'Value already exists';
		}
		this.setState((prevState) => {
			return {
				options: prevState.options.concat(option)
			};
		});	
	}
	
	handlePickOne(){
		const randomNum = Math.floor(Math.random() * this.state.options.length);
    	const option = this.state.options[randomNum];
    	alert(option);	
	}
	
	render() {
		const title ="Indecision";
		const subTitle ="Put your life in the hands of programming!";
		return ( 
			<div>
				<Header title={title} subtitle={subTitle} /> 
				<Action handlePickOne = {this.handlePickOne} hasOptions={this.state.options.length > 0}/>
				<Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} />
				<AddOption handleAddNewOption={this.handleAddNewOption} />
			</div>
		);
	}
}

class Header extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.title}</h1>
				<h3>{this.props.subtitle}</h3>
			</div>
		);
	}
}

class Action extends React.Component{
	render(){
		return(
			<div>
			{this.props.hasOptions}
				<button onClick={this.props.handlePickOne} disabled={!this.props.hasOptions}>What should I do?</button>
			</div>
		);
	}
}


class Options extends React.Component{
	render(){
		return(
			<div>
				<button onClick={this.props.handleRemoveAll}>Remove All</button>
			{this.props.options.map(
			(option) => <Option key={option} optionText={option} /> 
		)}
				
			</div>
		);
	}	
}

class Option extends React.Component{
	render(){
		return(
			<p>{this.props.optionText}</p>
		);
	}	
}

class AddOption extends 
React.Component{
	constructor(props){
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		
		this.state = {
			error:''
		};
	}
	
	handleAddOption(e){
		e.preventDefault();
		
		const option = e.target.elements.newoption.value.trim(); 
		const error = this.props.handleAddNewOption(option);
		
		this.setState(()=>{
			return {error};
		});
	}

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


ReactDOM.render( <DemoApp /> , document.getElementById('DemoContainer'));
