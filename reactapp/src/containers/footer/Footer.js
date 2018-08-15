import React from 'react';
import './Footer.css';
import Button from '../../components/Button/Button';

const Footer = (props) => {
	return(
		<div className="Footer">
		  <Button eventData={props.eventData}/>
		</div>
	);
}

export default Footer;