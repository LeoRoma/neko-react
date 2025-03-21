import React, { Component } from "react";

import DropdownContainer from "./DropdownContainer";
import Images from "./Images";
import ImagesPagination from "./ImagesPagination";

class ImagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      setCurrentPage: 1,
      imagesPerPage: 9,
    };
  }

  //Change page

  getCurrentPage(pageNumber) {
    this.setState({
      currentPage: pageNumber,
    });
  }

  render() {
    // For the pagination

    const indexOfLastImage = this.state.currentPage * this.state.imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - this.state.imagesPerPage;
    const currentImages = this.props.images.slice(
      indexOfFirstImage,
      indexOfLastImage
    );

    // Images

    const images = this.props.images;

    return (
      <div className="images-container">
        <div className="row">
          <div className="col">
            <DropdownContainer
              breeds={this.props.breeds}
              categories={this.props.categories}
              getImages={this.props.getImages}
            />
          </div>
        </div>
        <div className="row row-container">
          <Images images={currentImages} />
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <ImagesPagination
            imagesPerPage={this.state.imagesPerPage}
            totalImages={images.length}
            paginate={this.getCurrentPage.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default ImagesContainer;
