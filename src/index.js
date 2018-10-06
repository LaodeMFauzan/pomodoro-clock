import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

class Button extends Component{
	render(){
		return (
			<div
				id = {this.props.id}
				onClick = {this.props.onClick}
				label = {this.props.label}
				className = "button">
				{this.props.label}	
			</div>
		)
	}
}

class App extends Component{

	constructor(){
		super();
		this.state = {
			break: 5,
			session: 25,
			is_start: 'Start',
			total_count: 1,
			clock_start: false,
			is_break: false,
		}

		this.handleClick = this.handleClick.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
		this.formatClock = this.formatClock.bind(this);
		this.handleBreak = this.handleBreak.bind(this);
		this.startClock = this.startClock.bind(this);
	}

	handleBreak = e =>{
		const value = e.target.getAttribute('id');
		let break_time;
		switch(value){
			case 'break-increment':
				break_time = Object.assign(this.state.break)+1;
				if(break_time > 60 ){
					return;	
				} 
			break;

			case 'break-decrement':
				break_time = Object.assign(this.state.break)-1;
				if(break_time === 0 ){
					return;	
				} 
			break;
			
			default : return;
		}
		this.setState({
			break: break_time,
		})
	}

	handleClick = e =>{
		const value = e.target.getAttribute('id');
		let session_time,temp_count;
		switch(value){
			case 'session-increment':
				session_time = Object.assign(this.state.session)+1;
				temp_count = Object.assign(this.state.total_count)+60;
				if(session_time > 60 ){
					return;	
				} 
				this.setState({
					session: session_time,
					total_count: temp_count,
				})
				break;

			case 'session-decrement':
				session_time = Object.assign(this.state.session)-1;
				temp_count = Object.assign(this.state.total_count)-60;
				if(session_time === 0 ){
					return;
				}
				this.setState({
					session: session_time,
					total_count: temp_count,
				})
				break;

			case 'start_stop':
				
				
				break;
			default : return;
		}
	}

	resetTimer = () => {
		this.setState({
			break: 5,
			session: 25,
			is_start: 'Start',
			total_count: 1500,
		})
		clearInterval(this.myInterval);
	}

	formatClock = (total) => {
		let seconds = total % 60;
		let minutes = Math.floor(total / 60);
		if(seconds < 10){
			seconds = '0' + seconds;
		}
		if(minutes < 10){
			minutes = '0' + minutes
		}
		return minutes + ':'+seconds;
	}

	startClock = () => {
		let start_state = Object.assign(this.state.is_start);
		let break_time = Object.assign(this.state.break) * 60;
		if (this.state.is_start === 'Start') {
			start_state = 'Pause';
			if(this.state.total_count > 0){
				this.myInterval = setInterval(() => {
				this.setState(prevState => ({
					total_count: prevState.total_count - 1,
				}))
				},1000)
			} else {
				
			}		
		} else {

			start_state = 'Start';	
			clearInterval(this.myInterval);
		}
		this.setState({
				is_start : start_state,
		})	
	}

	breakTime = (total) => {
		if(total === 0 && this.state.is_break === false){
			this.playSound();
			let is_break_time = true;
			let break_time = Object.assign(this.state.break) * 60;
			this.setState({
				is_break : is_break_time,
				total_count : break_time,
			})
		} 
	}

	playSound = () => {
		const beep = document.getElementById("beep");
		beep.currentTime = 0;
		beep.play();
		setTimeout(() => 100);
	}

	//Coba stop counter pakai componentDidUpdate
	componentDidUpdate(prevProps, prevState) {

	}

	render(){
		return (
			<div className="app">
				<div className="setting-section">
					<div className="set-break">
						<ControlLabel id="break-label">Break</ControlLabel>
						<div className="break-control">
							<Button  onClick = {this.handleBreak} id="break-increment" label="+"/>
							<ControlLabel id="break-length">{this.state.break}</ControlLabel>
							<Button onClick = {this.handleBreak} id="break-decrement" label="-"/>
						</div>
					</div>
					<div className="set-session">
						<ControlLabel id="session-label">Work</ControlLabel>
						<div className="session-control">
							<Button onClick = {this.handleClick} id="session-increment" label="+"/>
							<ControlLabel id="session-length">{this.state.session}</ControlLabel>
							<Button onClick = {this.handleClick} id="session-decrement" label="-"/>	
						</div>
					</div>
				</div>
				<div className="display-clock">
					<ControlLabel id="timer-label">Timer</ControlLabel>
					<div className="trigger-control">
						<Button onClick = {this.startClock} id="start_stop" label={this.state.is_start}/>
						<ControlLabel id="time-left">{this.formatClock(this.state.total_count)}</ControlLabel>
						<Button onClick={this.resetTimer} id= "reset" label="Reset"/>
						<audio src="https://www.soundjay.com/button/beep-02.wav" id="beep"/>
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,document.getElementById('root')
);