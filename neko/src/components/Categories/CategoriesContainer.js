import React, { Component } from 'react';

import Categories from './Categories';
import DropdownCategories from './DropdownCategories';
import DropdownBreedImg from './DropdownBreedImg'

class CategoriesContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <DropdownCategories
              categories={this.props.categories}
              getCategoriesImg={this.props.getCategoriesImg.bind(this)}
            />
          </div>
          <div className="col">
            <DropdownBreedImg
              breeds={this.props.breeds}
              getBreedImg={this.props.getBreedImg.bind(this)}
            />
          </div>
        </div>
        <div className="row">
          <Categories
            categoriesImg={this.props.categoriesImg}
          />
        </div>
      </div>
    )
  }
}

export default CategoriesContainer;