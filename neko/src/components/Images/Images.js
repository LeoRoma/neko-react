import React, { Component } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import './ImagesStyles.css';

class CategoryImages extends Component {
  render() {
    const images = this.props.images

    return (
      <div className="container">
        <GridList cellHeight={260} cols={3}>
          {images.map(tile => (
            <GridListTile key={tile.id}>
              <img src={tile.url} alt="nekos"/>
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default CategoryImages;