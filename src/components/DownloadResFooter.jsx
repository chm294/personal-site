import React from 'react'

export default class DownloadResFooter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div >
				<a className="download-res-footer body-text" href="./ChristineMaResume.pdf" download="Christine Ma Resume">
						Download Resume
					</a>
			</div>
		)
	}
}