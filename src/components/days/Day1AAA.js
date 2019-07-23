import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Day1 from './Day1';
import Footer from './Footer';


class Day extends React.Component {
    render() {
       return( 
        <div>
            <Header />
            <Day1 />
            <Footer />
        </div>
       );
    }
}

export default Day;