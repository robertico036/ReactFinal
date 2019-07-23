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

const divStyle = {
    // width:'100%',   
    // color: '#000066',
    color:'white'
}
const h1Style = {
    padding: '30px',
    fontSize: '46px',
    backgroundColor:'#66ccff',
}
const h1day ={
    color:'white',
}
const left2 ={
    position:'relative',
    right: '-200px',
    top: '199px',
}
 const h1Days = {
     padding: '0  30px',
     fontSize: '46px',
     
     
}
 
 const left = {
     float: 'left',
     backgroundSize: '100% 100%',
     backgroundPosition: 'center',
     backgroundRepeat:'no-repeat',
     backgroundColor:'#00fff3',
     width:'100%',
     height: '800px'
 }
 const left1 = {
     float: 'left',
     backgroundSize: '100% 100%',
     backgroundPosition: 'center',
     backgroundRepeat:'no-repeat',
     backgroundColor:'white',
     width:'50%',
     height: '800px'
 }
const table = {
	height: '600px',
	color: 'red',
    marginLeft: '90px',
    fontFamily: 'fantasy',
    fontSize: '30px'
}
const OpenWeatherMapHelper = require("openweathermap-node");
const helper = new OpenWeatherMapHelper({
    APPID: '292d6e653acfd70934fa75b71625b986',
    units:"kelvin"
}); 

class Day1 extends React.Component{ 
    constructor(props) {
        super(props);

        this.state = {
            dates: new Array(),
            mins : new Array(),
            maxs : new Array(),
            icons : new Array(),
            dayNum :props.dayNum,
            dateReq : props.dayNum

        }
        this.getWeatherData();
    }
    getWeatherData(){
        let dates = this.state.dates;
        let mins = this.state.mins;
        let maxs = this.state.maxs;
        let icons = this.state.icons;
        let dayNum = this.state.dayNum;
        let dateReq = this.state.dateReq;

        dates = new Array();
        mins = new Array();
        maxs = new Array();
        icons = new Array();
        
        
        
        helper.getThreeHourForecastByCityName("Miami", (err,threeHourForecast) => {
            if (err){
                console.log(err);
    
            }else{
                for (let i=0;i < threeHourForecast.list.length; i++ ) {
                    dates.push(threeHourForecast.list[i].dt_txt);
                    mins.push(Math.floor(temperatureConverter(threeHourForecast.list[i].main.temp_min)));
                    maxs.push(Math.floor(temperatureConverter(threeHourForecast.list[i].main.temp_max)));
                    icons.push(threeHourForecast.list[i].weather[0].icon);
                }
            }
            console.log(dates.length);
            console.log(mins.length);
            console.log(maxs.length);
            console.log(icons.length);

            var today = new Date();
            dayNum = today.getDay();
         
            this.setState({
                dates: dates,
                mins: mins,
                maxs: maxs,
                icons: icons,
                dayNum: dayNum,
                dateReq: '2019-07-23'
            });



        });


        
        function temperatureConverter(valNum) {
            valNum = parseFloat(valNum);
            return((valNum-273.15)*1.8)+32;
        }
    }


    render(){

        const items = []

        for (let i=0; i < this.state.dates.length; i++) { 
            if (this.state.dates[i].startsWith(this.state.dateReq)) {
                items.push(<tr>   <td>{this.state.dates[i]}</td>     <td id="iconsImg">{this.state.icons[i]}</td>    <td>{this.state.mins[i]}</td>   <td>{this.state.maxs[i]}</td>      </tr>);
            }
        }

        return(
            <div style ={divStyle}>
                <div style={left}>
                
                    <h1> Today's Weather Information: {this.state.dateReq}</h1>
                    <br/>
                    <table style ={table}>
                        <tr>   <td>Date</td>     <td>Weather</td>    <td>Min</td>   <td>Max</td>      </tr>
                        {items}

                    </table>
                </div>
				<div style={weather}>
					<h1 id="day" style={myDay}>{this.state.dateReq}</h1>
					<img id="pic" style={dayIcon} src={Sun}/>
					<p id="highTemp" style={highTempSun}>77°</p>		
					<p id="lowTemp" style={lowTempSun}>60°</p>
				</div>
            </div>
        );
    }
}

export default Day1;



































