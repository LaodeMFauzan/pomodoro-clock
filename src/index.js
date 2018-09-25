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
					<h2 id="break-label">Break</h2>
					<Button id="break-increment" label="+"/>
					<span id="break-length">5</span>
					<Button id="break-decrement" label="-"/>
				</div>
				<div className="set-session">
					<h2 id="session-label">Session</h2>
					<Button id="session-increment" label="+"/>
					<ControlLabel id="session-label">25</ControlLabel>
					<Button id="session-decrement" label="-"/>	
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,document.getElementById('root')
);