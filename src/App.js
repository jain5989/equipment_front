// App.js

import React, { Component } from 'react';
import { Routes,  Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (

        <div>

          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>

          <hr />
          <Routes>

              <Route exact path='/' element={<Home></Home>} />
              <Route path='/home' element={<Home></Home>}/>
              <Route path='/contact' element={<Contact></Contact>} />
              <Route path='/about' element={<About></About>} />
              </Routes>

        </div>
    );
  }
}

export default App;
