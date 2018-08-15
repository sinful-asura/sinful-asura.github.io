import React from 'react';
import './Button.css';

const Button = (props) => {
	const { buttonClick } = props.eventData;
	return(
		<div className='button' onClick={buttonClick}>
			Update
		</div>
	);
}

export default Button;