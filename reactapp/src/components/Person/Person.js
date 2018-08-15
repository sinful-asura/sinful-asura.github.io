import React from 'react';
import './Person.css';
import Card from '../Card/Card'

const RedCard = {border : '2px red solid'};
const GreenCard = {border : '2px green solid'};
let counter = 0;
class Person extends React.Component{
	constructor(props){
		super(props);
		this.state={
			selectedStyle: GreenCard
		}
	}

componentDidUpdate(){
	if(this.props.cardCount<=5 && counter <=this.props.cardCount){
		this.setState(prevState => {
				return(Object.assign(this.state, {selectedStyle: RedCard}))
		})
		counter++;
	}
}

	render(){

	return (
		<div className="Person" style={{display: 'inline-block', margin:5, width: '18%'}}>
			<Card 
				userData={this.props.userData}
				eventData={this.props.eventData}
				changeActive={this.props.changeActive}
				style={this.state.selectedStyle}
			/>
		</div>
	);
  }
}

export default Person;