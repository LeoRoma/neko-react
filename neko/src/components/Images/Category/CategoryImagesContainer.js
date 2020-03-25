import React, { Component } from 'react';

import CategoryImages from './CategoryImages';
import DropdownCategories from './DropdownCategories';


class CategoriesImagesContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <DropdownCategories
              categories={this.props.categories}
              getCategoriesImg={this.props.getCategoriesImg}
            />
        </div>
        <div className="row">
          <CategoryImages
            categoriesImg={this.props.categoriesImg}
            cats={this.props.cats}
          />
        </div>
      </div>
    )
  }
}

export default CategoriesImagesContainer;