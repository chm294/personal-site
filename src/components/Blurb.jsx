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
						sample text sample text sample text sample text sample text 
						sample text sample text sample text sample text sample text 
						sample text sample text sample text sample text sample text 
						sample text sample text sample text sample text sample text 
						sample text sample text sample text sample text sample text 
						sample text sample text sample text sample text sample text 
						sample text sample text sample text sample text sample text
					</div>
				</div>
			</div>

		)
	}
}