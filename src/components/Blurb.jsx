import React from 'react'

export default class Blurb extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="content-container body-text">
				this is a personal blurb blurb
			</div>
		)
	}
}