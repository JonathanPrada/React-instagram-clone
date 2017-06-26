import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-2 text-right">
              <i className="fa fa-instagram" aria-hidden="true" />
          </div>
          <div className="col-2">
              <div id="menu-title" className="text-left">React Blog</div>
          </div>
          <div className="col-4 text-center">
            <input placeholder="Search"/>
          </div>
          <div className="col-2 text-right">
            <i className="fa fa-heart-o" aria-hidden="true" />
          </div>
          <div className="col-2 text-left">
            <i className="fa fa-user-o" aria-hidden="true" />
          </div>
      </div>
    );
  }
}

export default Menu;
