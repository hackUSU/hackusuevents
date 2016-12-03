"use strict";

import React                    from 'react';
import assets                   from '../libs/assets';
import NavBar                   from './common/topNavBar';

class Home extends React.Component {

  render(){
    var logo=assets("./images/Logo-Main.png")
    return<div>
      <NavBar />
      <div className="logo-container">
        <img src={logo} alt="HackUSU's Main Logo"/>
        <div>Events</div>
      </div>
    </div>;
  }

}

export { Home as default };