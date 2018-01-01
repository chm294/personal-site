import React from 'react'

export default class Applications extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="content-container">
				<div className="app-container">
						<a className="app-name" href="https://muster-94d83.firebaseapp.com/" target="_blank"> Muster </a>
						<img className="demo-gifs" src="./images/Muster.gif" />
					<div className="app-description-container">
						<div className="app-header">Full Stack Software Engineer</div>
							sample text sample text sample text sample text sample text 
							sample text sample text sample text sample text sample text 
							sample text sample text sample text sample text sample text 
							sample text sample text sample text sample text sample text 
							sample text sample text sample text sample text sample text 
							sample text sample text sample text sample text sample text 
							sample text sample text sample text sample text sample text
					</div>
				</div>
				<div className="app-container">
						<a className="app-name" href="https://muster-94d83.firebaseapp.com/" target="_blank"> TSpace Rhinebeck </a>
						<img className="demo-gifs" src="./images/TspaceRhinebeck.gif" />
					<div className="app-description-container">
						<div className="app-header">Website Design Managing</div>
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


