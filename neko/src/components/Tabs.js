import React, { Component } from 'react';

import { Tabs, Tab } from 'react-bootstrap';

import CatsContainer from './Breeds/CatsContainer';
import ImagesContainer from './Images/ImagesContainer';


import './Style.css';

class Tablas extends Component {
  render() {
    return (
      <div className="tabs-container">
        <Tabs className="tabs" defaultActiveKey="breeds" id="uncontrolled-tab-example">
          <Tab className="tab" eventKey="breeds" title="Breeds">
            <CatsContainer
              cats={this.props.cats}
              catsImg={this.props.catsImg}
              getBreed={this.props.getBreed.bind(this)}
              getBreedImg={this.props.getBreedImg.bind(this)}
              breeds={this.props.breeds}
            />
          </Tab>
          <Tab className="tab" eventKey="categories" title="Images">
            <ImagesContainer
              breeds={this.props.breeds}
              categories={this.props.categories}
              cats={this.props.cats}
              getImages={this.props.getImages.bind(this)}
              images={this.props.images}
            />
          </Tab>
        </Tabs>
      </div>
    )
  }
};

export default Tablas;