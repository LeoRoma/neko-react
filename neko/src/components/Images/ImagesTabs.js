import React, { Component } from 'react';

import { Tabs, Tab } from 'react-bootstrap';
import CategoryImagesContainer from './Category/CategoryImagesContainer'
// import CatsContainer from './Breeds/CatsContainer';
import BreedImagesContainer from './Breed/BreedImagesContainer';

class ImagesTabs extends Component {
  render() {
    return (
      <div className="container">
        <Tabs defaultActiveKey="breeds" id="uncontrolled-tab-example">
          <Tab eventKey="breeds" title="Category">
            <CategoryImagesContainer
              categories={this.props.categories}
              categoriesImg={this.props.categoriesImg}
              cats={this.props.cats}
              getCategoriesImg={this.props.getCategoriesImg}
            />
          </Tab>
          <Tab eventKey="categories" title="Breed">
            <BreedImagesContainer
              breeds={this.props.breeds}
              getBreedImg={this.props.getBreedImg.bind(this)}
              cats={this.props.cats}
            />
          </Tab>
        </Tabs>
      </div>
    )
  }
};

export default ImagesTabs;