// Home.js

import React, { Component } from 'react';
import Equipment from '../api/Equipment';

class Home extends Component {
  render() {
    return (
        <div>
          <h2>Use Case 1</h2>
          <Equipment></Equipment>
        </div>
    );
  }
}

export default Home;