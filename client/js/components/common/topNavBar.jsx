"use strict";

import React                    from 'react';
import assets                   from '../../libs/assets';
class NavBar extends React.Component {

  render(){
    return(
      <div className="nav-bar">
        <div className="nav-item"><a href="">Home</a></div>
        <div className="nav-item"><a href="">Hackathon</a></div>
        <div className="nav-item"><a href="">LHD</a></div>
        <div className="nav-item"><a href="">Contact</a></div>
      </div>);
  }

}

export { NavBar as default };