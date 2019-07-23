import React from 'react';
import ReactDOM from 'react-dom';

import Sun from './images/sunny.png';

const weather = {
	width: '540px',
	height: '540px',
	backgroundColor: '#66ffcc',
	position: 'absolute',
	top:'240px',
	left:'700px',
	borderRadius: '45px',
	textAlign: 'center'
}
const dayIcon = {
	width: '190px'
}
const highTempSun = {
	fontFamily: 'inherit',
	fontSize: '80px',
	fontWeight: 600,
	color: 'red',
	marginBottom: '100px',
	display: 'inline',
	position: 'absolute',
	top:'310px',
	left:'300px'
}
const lowTempSun = {
	fontFamily: 'inherit',
	fontSize: '70px',
	color: '#6699ff',
	marginBottom: '100px',
	display: 'inline',
	position: 'absolute',
	top:'355px',
	left:'155px'
}
const myDay = {
	width: '200px',
	color: 'pink',
	fontFamily: 'fantasy',
	fontSize:'70px',
	marginLeft: '75px',
	backgroundColor: '#00fff3',
	borderRadius: '45px',
	width: '360px',
	marginBottom: 0
}
const sun = {
	backgroundColor: '#66ffcc',
	borderRadius: '45px',
	width: '200px',
	color: 'red',
	fontFamily: 'monospace',
	fontSize:'50px',
	
}

class Day1 extends React.Component {

	render() {
		return (
		
			<div>
			<h1>Monday</h1>	
				<div style={weather}>
					<h1 id="day" style={myDay}>Sunday</h1>
					<img id="pic" style={dayIcon} src={Sun}/>
					<p id="highTemp" style={highTempSun}>77°</p>		
					<p id="lowTemp" style={lowTempSun}>60°</p>
				</div>
			</div>
		)
	}
}
export default Day1