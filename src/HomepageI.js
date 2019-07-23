import React from 'react';
import ReactDOM from 'react-dom';

import Singapore from './images/singapore.jpg';
import Ecuador from './images/ecuador.jpg';
import Kenya from './images/kenya.jpg';
import Morocco from './images/morocco.jpg';
import Sweden from './images/sweden.jpg';
import Newfoundisland from './images/newfoundisland.jpg';

const divStyle = {
	backgroundColor: '#000',
}
const h1Style = {
	padding: '30px',
	color: '#fff'
}
const imgStyle = {
	width: '33%'
}

class HomepageI extends React.Component {
	render () {
		return (
				<div style={divStyle}>
					<h1 style={h1Style}>Season 1</h1>
					<img style={imgStyle} src={Singapore}/>
					<img style={imgStyle} src={Ecuador}/>
					<img style={imgStyle} src={Kenya}/>
					<img style={imgStyle} src={Morocco}/>
					<img style={imgStyle} src={Sweden}/>
					<img style={imgStyle} src={Newfoundisland}/>
				</div>
			)
	}
}

export default HomepageI