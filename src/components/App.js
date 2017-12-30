import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Introduction from './Introduction.jsx';
import Resume from './Resume';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="header-container">
            <h1 className="header">Christine Ma</h1>
          </div>
        <div>
          <nav className="navbar"> 
            <div className="navitem">
              Resume
            </div>
            <div className="navitem">
              Applications
            </div>
            <div className="navitem">
              Blob
            </div>
          </nav>
        </div>
          <Route exact path="/" component={Introduction}/>
          <Route exact path ="/resume" component={Resume} />  
        </div>
      </Router>
    );
  }
}

export default App;
