import React, { Component } from 'react';

import CatsImages from './CatsImages';

class Cats extends Component {
  render() {
    // const images = this.props.catsImages
    // console.log(images)
    return (
      <div>
        {this.props.cats.map((cat) =>
          <div>
            <div>
              <h2>{cat.name}</h2>
              <h4>{cat.description}</h4>
              
              <CatsImages  
              catsImages={this.props.catsImages}/>

              <p><a href={cat.wikipedia_url}>More details</a></p>
            </div>
          </div>
        )}
      </div>
    )
  };
};

export default Cats;