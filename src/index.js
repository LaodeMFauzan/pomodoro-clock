import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Button extends React.Component{
	render(){
		return (
			<div
				onClick = {this.props.onClick}
				className = "button">
				
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
				<div id="break-label">Break</div>

				<div id="session-label">Session</div>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,document.getElementById('root')
);