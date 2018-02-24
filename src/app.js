class DemoApp extends React.Component {
	constructor(props){
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
		this.handleAddNewOption = this.handleAddNewOption.bind(this);
		this.handlePickOne= this.handlePickOne.bind(this);
		this.handleRemoveOption = this.handleRemoveOption.bind(this);
		this.state = {
			options:props.options
		};
	}
	
	handleRemoveAll() {
		this.setState( () => ({options:[]}));
	}
	handleRemoveOption(optionToRemove){
		this.setState((prevState)=>({
			options: prevState.options.filter((option)=> {return optionToRemove !== option;})
		}));
	}
	handleAddNewOption(option){ 
		if(!option){
			return 'Please enter valid option';
		}
		else if(this.state.options.indexOf(option)> -1){
			return 'Value already exists';
		}
		this.setState((prevState) => ({options: prevState.options.concat(option)}));	
	}
	
	handlePickOne(){
		const randomNum = Math.floor(Math.random() * this.state.options.length);
    	const option = this.state.options[randomNum];
    	alert(option);	
	}
	
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
				<Action handlePickOne = {this.handlePickOne} hasOptions={this.state.options.length > 0}/>
				<Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}
				handleRemoveOption = {this.handleRemoveOption}
				/>
				<AddOption handleAddNewOption={this.handleAddNewOption} />
			</div>
		);
	}
}

DemoApp.defaultProps = {
	options:[]
};

const Header = (props) => {
	return(
			<div>
				<h1>{props.title}</h1>
		{props.subtitle && <h3>{props.subtitle}</h3>}
			</div>
		);
};
Header.defaultProps = {
	title:"My Demo App"
};

const Action = (props) => {
	return(
			<div>
			{props.hasOptions}
				<button onClick={props.handlePickOne} disabled={!props.hasOptions}>What should I do?</button>
			</div>
		);
};

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

const Option = (props) => {
	return(
		<div>
			<p>{props.optionText}</p>
		<button onClick={(e)=>props.handleRemoveOption(props.optionText)}>Remove </button>
		</div>
		);
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
		
		this.setState(()=> ({error}));
		
		if(!error){
			e.target.elements.newoption.value='';
		}
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


ReactDOM.render( <DemoApp/> , document.getElementById('DemoContainer'));
