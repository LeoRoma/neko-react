import React, { Component } from 'react';

import DropdownImages from './DropdownImages';
import Images from './Images';

class ImagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      setCurrentPage: 1,
      imagesPerPage: 9,
      setImagesPerPage: 9
    }
  };
  render() {
    const indexOfLastImage = this.state.currentPage * this.state.imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - this.state.imagesPerPage;
    const currentImages = this.props.images.slice(indexOfFirstImage, indexOfLastImage)
    // 
    console.log(currentImages)
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <DropdownImages
              breeds={this.props.breeds}
              categories={this.props.categories}
              getImages={this.props.getImages}
            />
          </div>
        </div>
        <div className="row">
          <Images
            images={currentImages}
          />
        </div>
        {/* <Pagination /> */}
      </div>
    )
  }
}

export default ImagesContainer;