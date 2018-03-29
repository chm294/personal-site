import React from 'react';
import DownloadResFooter from './DownloadResFooter';

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
					infoExpand: false,
				}
    }

    render() {
			return (
				<div className="text-container">

					<div className="card-container">
						<header className="title">Skills</header>
						<div className="sub-title">Programming</div>
							<div className="bullet-text">Experienced : Javascript, ES6, HTML, CSS, React, Node, Axios, Algolia, Firebase, Express, SQL, Sequelize, Webpack, Babel</div>
							<div className="bullet-text">Familiar : Angular, Postgres, Mocha, MongoDB, Mongoose</div>

						<div className="sub-title">Design</div>
							<div className="bullet-text">After Effects, Illustrator</div>

						<div className="sub-title">Language</div>
							<div className="bullet-text">Mandarin (fluent), Italian (Elementary)</div>

						<div className="sub-title">Other</div>
							<div className="bullet-text">Administration, grants-writing, typography </div>

					</div>
					<div className="card-container">
						<header className="title">Experience</header>
							<div className="sub-title">Hack Reactor</div>
								<div className="bullet-text">Advanced Software Engineer Immersive Program</div>
							<div className="sub-title">Steven Myron Holl Foundation, Operations</div>
								<div className="bullet-text">Wrote grant applications and helped launch a number of new projects, 
								including the redesigning of <a href="http://tspacerhinebeck.org/" target="_blank"> SMHF's new gallery website </a> and successfully kickstarting a new Architectural Fellowship Program </div>
							<div className="sub-title" onClick={()=> {this.setState({infoExpand : !this.state.infoExpand})}}>
								Other Experiences 
								{this.state.infoExpand ? <div className="expand-button"> - </div> : <div className="expand-button"> + </div>}
							</div>
								{this.state.infoExpand ? <div className="bullet-text" >
									Grants Intern at Foundation for Contemporary Arts <br/>
									Archival Intern at 303 Gallery<br/>
									Gallery Intern at The FLAG Art Foundation, The Skyscraper Museum and Arader Galleries
								</div> : null}

					</div>
					<div className="card-container">
						<header className="title">Education</header>
							<div className="sub-title">New York University</div>
								<div className="bullet-text">BA Art History
								<br/> Minor Architecture and Urban Design 
								<br/> Special interest in Modern to Contemporary Art and Digital Design</div>
					</div>

					<div className="body-text">
						<DownloadResFooter />
					</div>
				</div>
				)
    }
}