import React, { Component } from 'react';

class CatsImages extends Component {
  render() {
    console.log(this.props.catsImages)
    return (
      <div>
        {this.props.catsImages.map((catimage) =>
          <div>
            <p>{catimage.url}</p>
            <img src={catimage.url}></img>
          </div>
        )}
      </div>
    )
  };
};

export default CatsImages;