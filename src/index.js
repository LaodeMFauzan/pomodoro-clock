import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Grid from 'react-bootstrap/lib/ControlLabel';
import Row from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/ControlLabel';

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
			<Grid>
				<Row className="show-grid">
	    			<Col xs={6} xsOffset={6}>
						<ControlLabel id="break-label">Break</ControlLabel>
					</Col>
					<Col xs={6} xsOffset={6}>
						<ControlLabel id="session-label">Session</ControlLabel>
					</Col>
				</Row>
				<div className="set-time-section">
						<Button id="break-increment" label="+"/>
						<ControlLabel id="break-length">5</ControlLabel>
						<Button id="break-decrement" label="-"/>
						
						<Button id="session-increment" label="+"/>
						<ControlLabel id="session-label">25</ControlLabel>
						<Button id="session-decrement" label="-"/>	
				</div>
			</Grid>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,document.getElementById('root')
);