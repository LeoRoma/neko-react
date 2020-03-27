import React, { Component } from 'react';

import { Tabs, Tab } from 'react-bootstrap';

import CatsContainer from './Breeds/CatsContainer';
import ImagesContainer from './Images/ImagesContainer';


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