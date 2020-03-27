import React, { Component } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class CategoryImages extends Component {
  render() {
    const categoriesImg = this.props.categoriesImg

    return (
      <div className>
        <GridList cellHeight={260} cols={3}>
          {categoriesImg.map(tile => (
            <GridListTile key={tile.id}>
              <img src={tile.url} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default CategoryImages;