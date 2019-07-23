import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

import wheatherIcon from './images/logoIcon.png';

const orageLetters = {
	fontFamily: 'fantasy',
	color: 'orange',
	fontSize: '30px',
	marginLeft: '30vw',
	display: 'inline',
	position: 'relative',
	top:'-42px',
	left:'0px'
}
const thumbnail = {
	width: '100px',
	opacy: 7,
	borderRadius: '10px',
	marginTop: '10px',
	marginLeft: '10px'
}

const headerclass = {
	height: '123px',
	backgroundColor: '#f2f2f2'
}

class Header extends React.Component {
	render() {
		return (
			<header style={headerclass}>			
				<Link to="/"><img style={thumbnail} src={wheatherIcon}/></Link>
				<h3 style={orageLetters}>Welcome to Miami Wheather App</h3>
			</header>
		)
	}
}

export default Header