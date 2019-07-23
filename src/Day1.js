import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Day1I from './Day1I';


class Day1 extends React.Component {
	render () {
		return (
				<div>
					<Header />
				    <Day1I />
				    <Footer />
				</div>
			)
	}
}

export default Day1