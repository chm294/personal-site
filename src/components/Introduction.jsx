import React from 'react'

export default class Introduction extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="content-container body-text">
				Hello, my name is Christine Ma. 
				I am a full stack software developer. 
				I studied at NYU majoring in Art History and hold a minor in Urban Design.
				<br/>
				<br/>
				My interests include cooking, <a href="https://vimeo.com/user53596363" target="_blank">fiddling with 2-D animation </a>, and digital design. 
				<div className="contact-footer">
					<a href="https://www.linkedin.com/in/christinehma/" target="_blank">
						<img src="https://www.usplastic.com/mobile/images/icons/social/linkedin.svg" className="icon" alt="LinkedIn"/> 
					</a>
					<a href="https://github.com/chm294" target="_blank">
						<img src="http://www.smallbutdigital.com/static/media/twitter.png" className="icon" alt="github"/>
					</a>
					<a href="https://vimeo.com/user53596363" target="_blank">
						<img src="http://www.lakepointmuskego.org/hp_wordpress/wp-content/uploads/2016/03/vimeo-4-xxl.png" className="icon" alt="vimeo" /> 
					</a>
				</div>
			</div>
		)
	}
}