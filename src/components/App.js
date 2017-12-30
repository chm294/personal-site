import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Introduction from './Introduction.jsx';
import Resume from './Resume';
import Applications from './Applications';
import Blurb from './Blurb';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="header-container">
            <Link to="/" className="header">Christine Ma</Link>
          </div>
        <div>

          <nav className="navbar"> 
            <Link to="Resume" className="navitem">Resume</Link>
            <Link to="/Applications" className="navitem">Applications</Link>
            <Link to="Blurb" className="navitem">Blurb</Link>
          </nav>
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
