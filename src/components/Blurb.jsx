import React from 'react'

export default class Blurb extends React.Component {
	render() {
		return (
			<div className="content-container">
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