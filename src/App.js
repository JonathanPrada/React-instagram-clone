import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-3">
              <div>Logo</div>
              <div>Reactiforum</div>
          </div>
          <div className="col-6">
              <div>Search Bar</div>
              <div>Likes</div>
          </div>
          <div className="col-3">
            <div>Profile</div>
          </div>
      </div>
    );
  }
}

export default App;
