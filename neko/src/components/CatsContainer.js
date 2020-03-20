import React, { Component } from 'react';

import Cats from './Cats';
import DropdownBreeds from './DropdownBreeds';

class CatsContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <DropdownBreeds
            getBreed={this.props.getBreed.bind(this)}
            breeds={this.props.breeds}
          />
        </div>
        <div className="row">
          <Cats
            cats={this.props.cats}
          />
        </div>
      </div>
    )
  }
}

export default CatsContainer;