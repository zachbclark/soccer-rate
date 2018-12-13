import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>soccer-rate</h1>
        <div class="dropdown">
        <select>
          <option>Premier League</option>
        </select>
        <br/>
        <select>
          <option>Matchweek</option>
        </select>
        </div>
       <br/>
       <div>
         <th>Match</th>
         <th>Score</th>
       </div>
      </div>
    );
  }
}

export default App;
