import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-2">
              <i className="fa fa-heart-o float-right fa-3x" aria-hidden="true" />
          </div>
          <div className="col-2">
              <div id="menu-title" className="text-left">Reactforum</div>
          </div>
          <div className="col-4">
              <div className="text-center">Search Bar</div>
          </div>
          <div className="col-2">
              <div className="text-right">Likes</div>
          </div>
          <div className="col-2">
            <div className="text-left">Profile</div>
          </div>
      </div>
    );
  }
}

export default App;
