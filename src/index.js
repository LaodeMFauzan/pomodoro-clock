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

class Display extends Component{
	render(){
		return (
			<div className="display-clock">
				<ControlLabel id="timer-label">Timer</ControlLabel>
				<div className="trigger-control">
					<Button id= "start_stop" label="Start"/>
					<ControlLabel id="time-left">25:00</ControlLabel>
					<Button id= "reset" label="Reset"/>
				</div>
			</div>
		)
	}
}

class App extends Component{

	constructor(){
		super();
		this.state = {
			break: 5,
			session: 25
		}
	}

	handleClick = e =>{
		const value = e.target.getAttribute('id');
		let break_time,session_time;
		switch(value){
			case 'break-increment':
				break_time = Object.assign(this.state.break)+1;
				this.setState({
					break: break_time,
				})
				break;
			case 'break-decrement':
				break_time = Object.assign(this.state.break)-1;
				this.setState({
					break: break_time,
				})
				break;
			case 'session-increment':
				session_time = Object.assign(this.state.session)+1;
				this.setState({
					session: session_time,
				})
				break;
			case 'session-decrement':
				session_time = Object.assign(this.state.session)-1;
				this.setState({
					session: session_time,
				})
				break;
			default : return;
		}
	}

	render(){
		return (
			<div className="app">
				<div className="setting-section">
					<div className="set-break">
						<ControlLabel id="session-label">Break</ControlLabel>
						<div className="break-control">
							<Button  onClick={this.handleClick} id="break-increment" label="+"/>
							<ControlLabel id="break-length">{this.state.break}</ControlLabel>
							<Button onClick={this.handleClick} id="break-decrement" label="-"/>
						</div>
					</div>
					<div className="set-session">
						<ControlLabel id="session-label">Session</ControlLabel>
						<div className="session-control">
							<Button onClick={this.handleClick} id="session-increment" label="+"/>
							<ControlLabel id="session-length">{this.state.session}</ControlLabel>
							<Button onClick={this.handleClick} id="session-decrement" label="-"/>	
						</div>
					</div>
				</div>
				<Display />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,document.getElementById('root')
);