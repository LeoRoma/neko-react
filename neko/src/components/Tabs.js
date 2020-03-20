import React, { Component } from 'react';

import { Tabs, Tab } from 'react-bootstrap';

import CatsContainer from './CatsContainer';
import CategoriesContainer from './CategoriesContainer';

class Tablas extends Component {
  render() {
    return (
      <div className="container">
        <Tabs defaultActiveKey="breeds" id="uncontrolled-tab-example">
          <Tab eventKey="breeds" title="Breeds">
            <CatsContainer
              cats={this.props.cats}
              getBreed={this.props.getBreed.bind(this)}
              breeds={this.props.breeds}
            />
          </Tab>
          <Tab eventKey="categories" title="Categories">
            <CategoriesContainer
              categories={this.props.categories}
              categoriesImg={this.props.categoriesImg}
              getCategoriesImg={this.props.getCategoriesImg.bind(this)}
            />
          </Tab>
          <Tab eventKey="more" title="More">
            More
          </Tab>
        </Tabs>
      </div>
    )
  }
};

export default Tablas;