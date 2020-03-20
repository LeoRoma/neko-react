import React, { Component } from 'react';

import Tabs from './Tabs'

// import Frame from './Frame'
import Navbar from './Navbar';

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
        <Tabs
          breeds={this.props.breeds}
          cats={this.props.cats}
          categories={this.props.categories}
          categoriesImg={this.props.categoriesImg}
          getBreed={this.props.getBreed.bind(this)}
          getCategoriesImg={this.props.getCategoriesImg.bind(this)}
        />
        {/* <Frame
          breeds={this.props.breeds}
          cats={this.props.cats}
          categories={this.props.categories}
          categoriesImg={this.props.categoriesImg}
          getBreed={this.props.getBreed.bind(this)}
          getCategoriesImg={this.props.getCategoriesImg.bind(this)}
        /> */}
      </div>
    )
  };
};

export default Home;