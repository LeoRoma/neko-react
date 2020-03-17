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
          breeds={this.props.breeds}
          cats={this.props.cats}
          categories={this.props.categories}
          categoriesImg={this.props.categoriesImg}
          getBreed={this.props.getBreed.bind(this)}
          getCategoriesImg={this.props.getCategoriesImg.bind(this)}
        />
        <Test />
      </div>
    )
  }

}

export default Home;