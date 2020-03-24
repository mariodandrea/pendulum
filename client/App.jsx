/**
 * @title App.jsx
 * @description Main component for the application
 */

import React, { Component } from 'react';
import { Router } from 'express';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="navigation">
          <header>The Pendulum</header>
        </div>
      </Router>
    );
  }
}
