import React, { Component } from "react";

import Cats from "./Cats";
import DropdownBreeds from "./DropdownBreeds";

// import './Cat.css';

class CatsContainer extends Component {
  render() {
    return (
      <div className="images-container">
        <div className="row dropdown-cats">
          <DropdownBreeds
            getBreed={this.props.getBreed.bind(this)}
            getBreedImg={this.props.getBreedImg.bind(this)}
            breeds={this.props.breeds}
          />
        </div>
        <div className="row cats-container-row">
          <Cats cats={this.props.cats} catsImg={this.props.catsImg} />
        </div>
      </div>
    );
  }
}

export default CatsContainer;
