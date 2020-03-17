import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



class Categories extends Component {
  render() {
    const categories = this.props.categories
    console.log(categories)
    return (
      <div className>
        <GridList cellHeight={260} cols={3}>
          {categories.map(tile => (
            <GridListTile key={tile.id}>
              <img src={tile.url} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default Categories;