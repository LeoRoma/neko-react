import React, { Component } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class BreedImages extends Component {
  render() {
    const categoriesImg = this.props.categoriesImg
    const cats = this.props.cats

    return (
      <div className>
        <GridList cellHeight={260} cols={3}>
          {cats.map(tile => (
            <GridListTile key={tile.id}>
              <img src={tile.url} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default BreedImages;