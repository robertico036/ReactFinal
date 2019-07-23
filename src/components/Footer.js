import React from 'react';
import ReactDOM from 'react-dom';

const OrangeLetters = {
	color: 'blue',
	fontSize: '30px',
	display: 'inline',
	position: 'relative',
	top: '19px',
	left: '36px'
}

const thumbnail = {
	height: '200px',
	opacity: 7,
	borderRadius:'10px'
}

const footerclass = {
	width: '100vw',
	height: '75px',
	backgroundColor: '#333333',
	position: 'absolute',
	top: '895px',
	left: '0px'
}

class Footer extends React.Component {
	render() {
		return (
			<footer style={footerclass}>
				<h3 style={OrangeLetters}>&copy; 2019 Roberto Espinosa</h3>
			</footer>
		)
	}
}
export default Footer