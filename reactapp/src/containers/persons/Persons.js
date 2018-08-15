import React, { Component} from 'react';
import users from '../../data/users';
import Person from '../../components/Person/Person';

class Persons extends Component{
	constructor(props){
		super();
		this.state = {
			users: users,
			changeActive: props.changeActive,
			changeId: props.changeId
		}
		 this.onRemove = (id) => {
			const newUsers = this.state.users.filter(user => user.id !== id);
			this.setState({users: newUsers});
		}
	}


componentWillReceiveProps(nextProps){
	this.setState(Object.assign(this.state, {changeActive: nextProps.changeActive, changeId: nextProps.changeId}));
}
render(){
	return(
		<div className="Persons">
			{
				this.state.users.map((user, key) => {
					return (
						<Person 
							key={key} 
							id={user.id} 
							name={user.name} 
							onRemove={this.onRemove} 
							changeActive={this.state.changeActive} 
							changeId={this.props.changeId}
						/>
					);
				})
			}
		</div>
	);
  }
}

export default Persons;