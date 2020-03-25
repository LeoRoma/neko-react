import React, { Component } from 'react';

import { Tabs, Tab } from 'react-bootstrap';
import CategoryImagesContainer from './Category/CategoryImagesContainer'
// import CatsContainer from './Breeds/CatsContainer';
// import ImagesContainer from './Images/ImagesContainer';

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
            Breed
          </Tab>
        </Tabs>
      </div>
    )
  }
};

export default ImagesTabs;