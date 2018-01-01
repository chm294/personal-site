import React from 'react'

export default class Applications extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="content-container">
				<div className="card-container">
					<a className="app-name" href="https://muster-94d83.firebaseapp.com/" target="_blank"> Muster </a>
					<div className="demo-gif-container">
						<img className="demo-gifs" src="./images/Muster.gif" />
					</div>
				</div>
			</div>
		)
	}
}

