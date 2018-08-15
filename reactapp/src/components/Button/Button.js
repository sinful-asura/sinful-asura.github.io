import React from 'react';
import './Button.css';


const Button = (props) => {
	return(
		<div className='button' onClick={props.onClick}>
			Click Me!
		</div>
	);
}

export default Button;