import React, { Component } from 'react';

import Cats from './Cats';
import DropdownBreeds from './DropdownBreeds';

// import './Cat.css';

class CatsContainer extends Component {
  render() {
    return (
      <div className="images-container">
        <div className="row">
          <div className="col">
            <DropdownBreeds
              getBreed={this.props.getBreed.bind(this)}
              getBreedImg={this.props.getBreedImg.bind(this)}
              breeds={this.props.breeds}
            />
          </div>
        </div>
        <div className="row row-container">
          <Cats
            cats={this.props.cats}
            catsImg={this.props.catsImg}
          />
        </div>
      </div>
    )
  }
}

export default CatsContainer;