import React from 'react'

export default class Introduction extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="body-text">
				<div>
				Hello, my name is Christine Ma. I am a full stack software developer.
				I studied at NYU majoring in Art History and hold a minor in Urban Design.
				</div>
				<br/>
				<br/>
				<div>
				My interests include cooking, 2-D animation, and digital design. 
			</div>
			</div>
		)
	}
}