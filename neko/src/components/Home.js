import React, { Component } from 'react';

import Navbar from './Navbar';
import Frame from './Frame'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };
  render() {
    
    return (
      <div>
        <Navbar />
        <Frame
          cats={this.props.cats}
          getBreed={this.props.getBreed.bind(this)}
        />
      </div>
    )
  }

}

export default Home;