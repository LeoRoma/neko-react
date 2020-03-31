import React, { Component } from 'react';

import { Tabs, Tab } from 'react-bootstrap';

import CatsContainer from './Breeds/CatsContainer';
import ImagesContainer from './Images/ImagesContainer';

import './Style.css';

class Tablas extends Component {
  render() {
    return (
      <div className="container">
        <Tabs className="tabs-container" defaultActiveKey="breeds" id="uncontrolled-tab-example">
          <Tab className="tab-container" eventKey="breeds" title="Breeds">
            <CatsContainer
              cats={this.props.cats}
              getBreed={this.props.getBreed.bind(this)}
              breeds={this.props.breeds}
            />
          </Tab>
          <Tab className="tab-container" eventKey="categories" title="Images">
            <ImagesContainer
              breeds={this.props.breeds}
              categories={this.props.categories}
              cats={this.props.cats}
              getImages={this.props.getImages.bind(this)}
              images={this.props.images}
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