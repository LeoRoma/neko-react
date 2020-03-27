import React, { Component } from 'react';

import BreedImages from './BreedImages';
import DropdownBreedImg from '../DropdownBreedImg';
// import Pagination from './Pagination'


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
        {/* <Pagination /> */}
      </div>
    )
  }
}

export default BreedImagesContainer;