import React from 'react';
import DownloadResFooter from './DownloadResFooter';

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
			return (
				<div className="body-text">
					this is my vroom vroom
					<br/>
					this is my reszoom
					<DownloadResFooter />
				</div>
				)
    }
}