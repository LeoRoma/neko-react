import React, { Component } from 'react';

import BreedImages from './BreedImages';
import DropdownBreedImg from './DropdownBreedImg';


class BreedImagesContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <DropdownBreedImg
            breeds={this.props.breeds}
            getBreedImg={this.props.getBreedImg.bind(this)}
          />
        </div>
        <div className="row">
          <BreedImages
            catsImg={this.props.catsImg}
          />
        </div>
      </div>
    )
  }
}

export default BreedImagesContainer;