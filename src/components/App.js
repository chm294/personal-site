import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Introduction from './Introduction.jsx';
import Resume from './Resume';
import Applications from './Applications';
import Blurb from './Blurb';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    } 
  }
  render() {
    return (
      <Router>
        <div className="content-container">
        <div className="parallax">
          <div className="header-container">
            <Link to="/" className="header">christine ma</Link>
          </div>
        <div>
          <nav className="navbar" id="navbar"> 
            <Link to="Resume" className="navitem">Resume</Link>
            <Link to="/Applications" className="navitem">Applications</Link>
            <Link to="Blurb" className="navitem">Blurb</Link>
          </nav>
        </div>
        </div>
          <Route exact path="/" component={Introduction} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Applications" component={Applications} />
          <Route exact path="/Blurb" component={Blurb} />
        </div>
      </Router>
    );
  }
}

export default App;
