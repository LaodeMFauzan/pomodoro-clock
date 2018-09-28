import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

class Button extends React.Component{
	render(){
		return (
			<div
				id = {this.props.id}
				onClick = {this.props.onClick}
				data-value = {this.props.label}
				className = "button">
				{this.props.label}	
			</div>
		)
	}
}

class Display extends React.Component{
	render(){
		return (
			<div className="display-clock">
				<ControlLabel id="timer-label">Timer</ControlLabel>
				<div className="trigger-control">
					<Button id= "start-stop" label="Start"/>
					<ControlLabel id="time-left">25:00</ControlLabel>
					<Button id= "reset" label="Reset"/>
				</div>
			</div>
		)
	}
}

class App extends React.Component{
	render(){
		return (
			<div className="app">
				<div className="setting-section">
					<div className="set-break">
						<ControlLabel id="session-label">Break</ControlLabel>
						<div className="break-control">
							<Button id="break-increment" label="+"/>
							<ControlLabel id="break-length">5</ControlLabel>
							<Button id="break-decrement" label="-"/>
						</div>
					</div>
					<div className="set-session">
						<ControlLabel id="session-label">Session</ControlLabel>
						<div className="session-control">
							<Button id="session-increment" label="+"/>
							<ControlLabel id="session-length">25</ControlLabel>
							<Button id="session-decrement" label="-"/>	
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