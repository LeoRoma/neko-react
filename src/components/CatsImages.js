import React, { Component } from 'react';

class CatsImages extends Component {
  render() {
    return (
      <div>
        {this.props.catsImages.map((catimage) =>
          <div>
            <p>{catimage}</p>
            {/* <img src=></img> */}
          </div>
        )}

        HEllo
      </div>
    )
  };
};

export default CatsImages;