import React, { Component } from 'react';

import Navbar from './Navbar';
import Frame from './Frame'
import Test from './Test'

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
          breeds={this.props.breeds}
        />
        <Test />
      </div>
    )
  }

}

export default Home;