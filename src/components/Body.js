import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

//Images
import Rain from './images/rain.png';
import Snow from './images/snow.png';
import Sun from './images/sunny.png';
import Cloudy from './images/cloudy.png';
import RainShowers from './images/rainShowers.png';
import ElectricStorm from './images/electricStorm.png';
import SunElecRain from './images/sunElecRain.png';
import ElecRainVent from './images/elecRainVent.png';

const days = {
	marginLeft: '100px'
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
const mon = {
	backgroundColor: '#66ffcc',
	borderRadius: '45px',
	width: '200px',
	color: 'blue',
	fontFamily: 'monospace',
	fontSize:'50px'
}
const tue = {
	backgroundColor: '#66ffcc',
	borderRadius: '45px',
	width: '220px',
	color: 'pink',
	fontFamily: 'monospace',
	fontSize:'50px'
}
const wed = {
	backgroundColor: '#66ffcc',
	borderRadius: '45px',
	width: '285px',
	color: 'black',
	fontFamily: 'monospace',
	fontSize:'50px'
}
const thu = {
	backgroundColor: '#66ffcc',
	borderRadius: '45px',
	width: '255px',
	color: 'yellow',
	fontFamily: 'monospace',
	fontSize:'50px'
}
const fri = {
	backgroundColor: '#66ffcc',
	borderRadius: '45px',
	width: '200px',
	color: 'brown',
	fontFamily: 'monospace',
	fontSize:'50px'
}
const sat = {
	backgroundColor: '#66ffcc',
	borderRadius: '45px',
	width: '255px',
	color: 'green',
	fontFamily: 'monospace',
	fontSize:'50px'
}

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
const OpenWeatherMapHelper = require("openweathermap-node");
const helper = new OpenWeatherMapHelper(
    {
        APPID: '292d6e653acfd70934fa75b71625b986',
        units: "kelvin"
    }
);

console.log("Datafgrtiuntnk is here");
class Body extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			dates: props.dates,
			mins: props.mins,
			maxs: props.maxs,
			icons: props.icons,
			dayNum : props.dayNum
		}
		this.getWeatherData();
	}

	getWeatherData() {
		let dates = this.state.dates;
		let mins = this.state.mins;
		let maxs = this.state.maxs;
		let icons = this.state.icons;
		let dayNum = this.state.dayNum;

		dates = new Array();
		mins = new Array();
		maxs = new Array();
		icons = new Array();

		helper.getThreeHourForecastByCityName("Miami", (err, threeHourForecast) => {
		    if(err){
		        console.log(err);
		    }
		    else{
		        for (let i=0; i < threeHourForecast.list.length;i++){
		        	dates.push(threeHourForecast.list[i].dt_txt);
		        	mins.push(Math.floor(this.temperatureConverter(threeHourForecast.list[i].main.temp_min)));
		        	maxs.push(Math.floor(this.temperatureConverter(threeHourForecast.list[i].main.temp_max)));
		        	icons.push(threeHourForecast.list[i].weather[0].icon);
		        }
		        
		    }

			this.setState({dates});
			this.setState({mins});
			this.setState({maxs});
			this.setState({icons});

			var today = new Date();
			var dayNum = today.getDay();
			this.setState({dayNum});
			console.log(today.getDay());
		});
		


	}
	temperatureConverter(valNum) {
		valNum = parseFloat(valNum);
		return((valNum-273.15)*1.8)+32;
	}

	DrawSun = () => {
		var day = document.getElementById('day');
		var pic = document.getElementById('pic');
		var temp = document.getElementById('temp');
		var highTemp = document.getElementById('highTemp');
		var lowTemp = document.getElementById('lowTemp');
		var index = ((3 - this.state.dayNum - 1) * 8) + 3;
		index = index > 39 || index < 0 ? 3 : index;

		day.innerHTML = "Sunday";
		day.style.color = '#ff8080';
		pic.src = Sun;
		highTemp.innerHTML = (this.state.maxs[index]);
		lowTemp.innerHTML = (this.state.mins[index]);
		
	}

	DrawMon = () => {
		var day = document.getElementById('day');
		var pic = document.getElementById('pic');
		var temp = document.getElementById('temp');
		var highTemp = document.getElementById('highTemp');
		var lowTemp = document.getElementById('lowTemp');
		var index = ((3 - this.state.dayNum - 1) * 8) + 3;
		index = index > 39 || index < 0 ? 3 : index;

		day.innerHTML = "Monday";
		day.style.color = '#80b3ff';
		pic.src = Rain;
		highTemp.innerHTML = (this.state.maxs[index]);
		lowTemp.innerHTML = (this.state.mins[index]);
	}

	DrawTue = () => {
		var day = document.getElementById('day');
		var pic = document.getElementById('pic');
		var temp = document.getElementById('temp');
		var highTemp = document.getElementById('highTemp');
		var lowTemp = document.getElementById('lowTemp');
		var index = ((3 - this.state.dayNum - 1) * 8) + 3;
		index = index > 39 || index < 0 ? 3 : index;

		day.innerHTML = "Tuesday";
		day.style.color = '#ff66b3';
		pic.src = ElecRainVent;
		highTemp.innerHTML = (this.state.maxs[index]);
		lowTemp.innerHTML = (this.state.mins[index]);
	}

	DrawWed = () => {
		var day = document.getElementById('day');
		var pic = document.getElementById('pic');
		var temp = document.getElementById('temp');
		var highTemp = document.getElementById('highTemp');
		var lowTemp = document.getElementById('lowTemp');
		var index = ((3 - this.state.dayNum - 1) * 8) + 3;
		index = index > 39 || index < 0 ? 3 : index;

		day.innerHTML = "Wednesday";
		day.style.color = '#999999';
		pic.src = Cloudy;
		highTemp.innerHTML = (this.state.maxs[index]);
		lowTemp.innerHTML = (this.state.mins[index]);
	}

	DrawThu = () => {
		var day = document.getElementById('day');
		var pic = document.getElementById('pic');
		var temp = document.getElementById('temp');
		var highTemp = document.getElementById('highTemp');
		var lowTemp = document.getElementById('lowTemp');
		var index = ((3 - this.state.dayNum - 1) * 8) + 3;
		index = index > 39 || index < 0 ? 3 : index;

		day.innerHTML = "Thursday";
		day.style.color = '#ffff99';
		pic.src = RainShowers;
		highTemp.innerHTML = (this.state.maxs[index]);
		lowTemp.innerHTML = (this.state.mins[index]);
	}

	DrawFri = () => {
		var day = document.getElementById('day');
		var pic = document.getElementById('pic');
		var temp = document.getElementById('temp');
		var highTemp = document.getElementById('highTemp');
		var lowTemp = document.getElementById('lowTemp');
		var index = ((3 - this.state.dayNum - 1) * 8) + 3;
		index = index > 39 || index < 0 ? 3 : index;

		day.innerHTML = "Friday";
		day.style.color = '#804000';
		pic.src = ElectricStorm;
		highTemp.innerHTML = (this.state.maxs[index]);
		lowTemp.innerHTML = (this.state.mins[index]);
	}
	DrawSat = () => {
		var day = document.getElementById('day');
		var pic = document.getElementById('pic');
		var temp = document.getElementById('temp');
		var highTemp = document.getElementById('highTemp');
		var lowTemp = document.getElementById('lowTemp');
		var index = ((3 - this.state.dayNum - 1) * 8) + 3;
		index = index > 39 || index < 0 ? 3 : index;

		day.innerHTML = "Saturday";
		day.style.color = '#39e600';
		pic.src = SunElecRain;
		highTemp.innerHTML = (this.state.maxs[index]);
		lowTemp.innerHTML = (this.state.mins[index]);
		
	}

	render() {
		return (
			<section style={days}>
				
				<Link to="/Day1"><h1 style={sun} onMouseOver={this.DrawSun}>Sunday</h1></Link>
				
				<Link to="/Day1"><h1 style={mon} onMouseOver={this.DrawMon}>Monday</h1></Link>			

				<Link to="/Day1"><h1 style={tue} onMouseOver={this.DrawTue}>Tuesday</h1></Link>					

				<Link to="/Day1"><h1 style={wed} onMouseOver={this.DrawWed}>Wednesday</h1></Link>					

				<Link to="/Day1"><h1 style={thu} onMouseOver={this.DrawThu}>Thursday</h1></Link>	
				
				<Link to="/Day1"><h1 style={fri} onMouseOver={this.DrawFri}>Friday</h1></Link>	
				
				<Link to="/Day1"><h1 style={sat} onMouseOver={this.DrawSat}>Saturday</h1></Link>	

				<div style={weather}>
					<h1 id="day" style={myDay}>Sunday</h1>
					<img id="pic" style={dayIcon} src={Sun}/>
					<p id="temp" style={lowTempSun}></p>
					<p id="highTemp" style={highTempSun}></p>		
					<p id="lowTemp" style={lowTempSun}></p>
				</div>
			</section>
		)
	}
}
export default Body


