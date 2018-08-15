import React from 'react';
import Person from '../../components/Person/Person';

const Persons = (props) =>{
	const users = props.userData;

	return(
		<div className="Persons">
			{
				users.map((user, key) => {
					return (
					  <Person
					  	 key={key}
						 userData={user} 
         				 eventData={props.eventData}
         				 changeActive={props.changeActive}
         				 cardCount={props.cardCount}
         			  />
					);
				})
			}
		</div>
	);
}

export default Persons;