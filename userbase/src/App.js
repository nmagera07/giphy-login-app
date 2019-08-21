import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Credentials from './components/credentials'
import NavBar from './components/NavBar'
import FunStuff from './components/funstuff'
import Home from './components/Home'

function App(props) {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Credentials} />
        <Route path="/funstuff" component={FunStuff} />
      </Router>
    </div>
  );
}

export default App;
