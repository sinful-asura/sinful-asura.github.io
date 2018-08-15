import React, { Component } from 'react';
import './Person.css';
import icon from '../../data/exit-icon.png';

class Person extends Component {
	constructor(props){
		super(props);
		this.state={
			id: props.id,
			name: props.name,
			canBeChanged: props.changeActive,
			changeId: props.changeId
		}
		this.changeName = () =>{
			if((this.state.id === this.state.changeId) && (this.state.canBeChanged === true)){
				this.setState(Object.assign(this.state, {name: prompt('Enter new name:')}))
			}
			console.log(this.state)
		}
	}

componentWillReceiveProps(nextProps){
	this.setState(Object.assign(this.state, {id: nextProps.id, name: nextProps.name, canBeChanged: nextProps.changeActive, changeId: nextProps.changeId}));
	this.changeName();
}

render(){
	const {id, name} = this.state;

const setName = () => {
	this.setState(Object.assign(this.state, {name: prompt('Enter new name:')}));
}

const callbackFunction = () => {
	this.props.onRemove(this.state.id);
}
	return (

		<div className="Person" style={{display: 'inline-block', margin:5, width: '18%'}}>
			<article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 article">
			<img alt="remove" src={icon} className="exitBtn" onClick={callbackFunction}/>
			  <div className="tc">
			    <img alt="Cat" src={`https://robohash.org/${id}?set=set4`} className="br-100 h3 w3 dib"/>
			    <h1 className="f4" onClick={setName}>{name}</h1>
			    <hr className="mw3 bb bw1 b--black-10" />
			  </div>
			  {this.state.id}
			</article>
		</div>
	);
  }
}

export default Person;