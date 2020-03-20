import React, { Component } from 'react';

import DropdownCategories from './DropdownCategories';
import Categories from './Categories';

class CategoriesContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <DropdownCategories
            categories={this.props.categories}
            getCategoriesImg={this.props.getCategoriesImg.bind(this)}
          />
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