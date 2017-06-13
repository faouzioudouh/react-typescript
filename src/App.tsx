import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to E-react</h2>
        </div>
        <p className="App-intro">
          We're going to build a small sample Ecommerce site using react
          along with typescript and server Side rendering with node.
        <h4>Stay tuned!</h4>
        </p>
      </div >
    );
  }
}

export default App;
