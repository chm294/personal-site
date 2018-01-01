import React from 'react'

export default class Blurb extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="content-container">
				<div className="app-container">
						<img className="demo-gifs" src="./images/spiritedaway-food.jpg" />
				<div className="blurb-text">
					<div className="app-header">Review: Spirited Away</div>
						Written 2017<br/>
						Coming soon.
					</div>
				</div>
				<div className="app-container">
						<img className="demo-gifs" src="./images/DonaldJudd.gif" />
				<div className="blurb-text">
					<div className="app-header">Architectural Drawing and Model: Donald Judd Standing Desk</div>
						Created 2016 <br/> 
						
					</div>
				</div>
				<div className="app-container">
						<img className="demo-gifs" src="./images/cube.gif" />
				<div className="blurb-text">
					<div className="app-header">Architectural Drawing and Model: Concept Cube</div>
						Created 2016 <br/> 
						
					</div>
				</div>
			</div>

		)
	}
}