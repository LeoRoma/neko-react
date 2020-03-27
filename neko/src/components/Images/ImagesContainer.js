import React, { Component } from 'react';

// import BreedImages from './BreedImages';
import DropdownImages from './DropdownImages';
// import DropdownCategories from './DropdownCategories';
import CategoryImages from './CategoryImages';
// import Pagination from './Pagination'


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
              getBreedImg={this.props.getBreedImg.bind(this)}
              getCategoriesImg={this.props.getCategoriesImg}
            />
          </div>
          {/* <div className="col">
            <DropdownCategories
              categories={this.props.categories}
              getCategoriesImg={this.props.getCategoriesImg}
            />
          </div> */}

        </div>
        <div className="row">
          <CategoryImages
            categoriesImg={this.props.categoriesImg}
            cats={this.props.cats}
          />
        </div>
        {/* <Pagination /> */}
      </div>
    )
  }
}

export default ImagesContainer;