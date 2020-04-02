import React, { Component } from 'react';
import Carousel from './Carousel'

class Cat extends Component {

  render() {
    const name = this.props.name;
    const origin = this.props.origin;
    const temperament = this.props.temperament;
    const description = this.props.description;
    const lifeSpan = this.props.lifeSpan;
    const wikipediaUrl = this.props.wikipediaUrl;
    
    return (
      <div className="container">
        <div className="row">
          <div className="col black-text text-center text-md-left mt-xl-10 mb-10">
            <h1 className="h1-responsive font-weight-bold mt-sm-5">
              {name}
            </h1>
            <hr className="hr-light" />
            <h2>
              {origin}
            </h2>
            <h6 className="mb-10">
              {temperament}
            </h6>
            <h6>
              {lifeSpan} average life span
                  </h6>
            <p>
              {description}
            </p>
            <p><a href={wikipediaUrl}>More Details</a></p>
          </div>

          <div className="col">
            <Carousel
              catsImg={this.props.catsImg}
            />
          </div>
          
        </div>
      </div>
    )
  }
};

export default Cat;