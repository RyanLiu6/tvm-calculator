import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll'

import './intro.css'

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="introInner">
          <h1>Time Value of Money Calculator.</h1>
          <p>Truly a beaut.</p>
        </div>
        <ScrollLink
          className={"introScroll"}
          to="App"
          smooth={true}
          offset={-60}
        >
          &#9660; Take me down &#9660;
        </ScrollLink>
      </div>
    )
  }
}

export default Intro
