import React from 'react';
import './Footer.css';
import Button from '../../components/Button/Button';

const Footer = (props) => {
	const {isClicked} = props;
	return(
		<div className="Footer">
				<Button onClick={isClicked}/>
		</div>
	);
}

export default Footer;