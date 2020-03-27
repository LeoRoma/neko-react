import React, { Component } from 'react';

import Tabs from './Tabs'

// import Frame from './Frame'
import Navbar from './Navbar';
// import Player from './Player';
// import Test from './Test'

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

        <Tabs
          breeds={this.props.breeds}
          cats={this.props.cats}
          categories={this.props.categories}
          getImages={this.props.getImages.bind(this)}
          getBreed={this.props.getBreed.bind(this)}
          images={this.props.images}
        />
        {/* <Player /> */}
      </div>
    )
  };
};

export default Home;