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
							<em>A social-oriented book loan, trade, and purchasing application that simulates the experience of a library</em>
							<br/><br/>
							Team of 4 <br/>
							November 27 - December 23, 2017 <br/>
							Tech Stack: Firebase, React, React Router, React-Google-Maps, Stripe, Dragula, Algolia, Clarifai<br/><br/>
							We leveraged Firebase's back-end services such as Open Authorization and 
							real-time database to live-update Muster's instant messaging and trading features. 
							A second live-copy of the database exists in Algolia solely for optimizing search
							querying time and functionality.
							Features aim to personalize user experience. Users can follow and unfollow others, like
							and unlike categories of books, and customize their profile page. An easy-to-use archival 
							interface allows user to sort through items, collections, and categories by dragging from 
							one compartment to another. 
							 
					</div>
				</div>
				<div className="app-container">
						<a className="app-name" href="http://tspacerhinebeck.org/" target="_blank"> TSpace Rhinebeck </a>
						<img className="demo-gifs" src="./images/TspaceRhinebeck.gif" />
					<div className="app-description-container">
						<div className="app-header">Website Design and UI Management</div>
						<em>
							A website for Steven Holl Architect's nonprofit gallery, TSpace, located in Hudson Valley, New York.
							The website aims to emulate TSpace's mission to integrate experimental visual arts, architecture, poetry, music, 
							and nature.
						</em>
						<br/><br/>
						February - June, 2016 <br/>
						<br/>
							I worked between the web developer, web designer, and the board members of The Steven Myron Holl Foundation 
							to bring together a web application that encompasses the non-profit's vision. This involved an in-depth reorganization
							of the foundation's archives in order to gather necessary content. Not only did I help design the website architecture, 
							user experience and interface, but I was also responsible for researching and writing content.
					</div>
				</div>
			</div>
		)
	}
}


