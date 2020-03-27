import React, { Component } from 'react';

import DropdownImages from './DropdownImages';
import Images from './Images';

class ImagesContainer extends Component {
  render() {
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
            images={this.props.images}
          />
        </div>
        {/* <Pagination /> */}
      </div>
    )
  }
}

export default ImagesContainer;