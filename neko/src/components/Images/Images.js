import React, { Component } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class CategoryImages extends Component {
  render() {
    const images = this.props.images

    return (
      <div className="grid-container">
        <GridList className="grid-list" cellHeight={420} cols={3}>
          {images.map(tile => (
            <GridListTile key={tile.id} className="thumbnail">
              <img src={tile.url} alt="nekos"/>
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default CategoryImages;