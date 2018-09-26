import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

class Button extends React.Component{
	render(){
		return (
			<div
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
			<div>
				
			</div>
		)
	}
}

class App extends React.Component{
	render(){
		return (
			<div className="app">
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

				<Display />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,document.getElementById('root')
);