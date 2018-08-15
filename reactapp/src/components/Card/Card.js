import React from 'react';
import icon from '../../data/exit-icon.png';
import '../Person/Card.css'

const Card = (props) => {
		const { deleteUser, setUser, updateUser } = props.eventData;
		const { name, id } = props.userData;
	return(
		<article
			 className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 article"
			 onClick={() => {setUser.call(this, {userData: props.userData, eventData: props.eventData, newName: props.changeActive ? prompt('Enter new name:'): ''})}}
			 style={props.style}
			 >
			<img alt="remove" src={icon} className="exitBtn" onClick={() => deleteUser.call(this, props)} />
			  <div className="tc">
			    <img alt="Cat" src={`https://robohash.org/${id}?set=set4`} className="br-100 h3 w3 dib"/>
			    <h1 className="f4" onClick={() => updateUser.call(this,{userData: props.userData, eventData: props.eventData, newName: prompt('Enter new name:')})}>{name}</h1>
			    <hr className="mw3 bb bw1 b--black-10" />
			  </div>
			  {id}
			</article>
	);
}

export default Card;