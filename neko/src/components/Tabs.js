import React, { Component } from 'react';

import { Tabs, Tab } from 'react-bootstrap';

import CatsContainer from './Breeds/CatsContainer';
import CategoriesContainer from './Categories/CategoriesContainer';

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
          <Tab eventKey="categories" title="Images">
            <CategoriesContainer
              breeds={this.props.breeds}
              categories={this.props.categories}
              categoriesImg={this.props.categoriesImg}
              getBreedImg={this.props.getBreedImg.bind(this)}
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