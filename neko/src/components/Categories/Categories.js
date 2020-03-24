import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



class Categories extends Component {
  render() {
    const categoriesImg = this.props.categoriesImg
    const cats = this.props.cats
    console.log(cats)
    // console.log(categories)
    return (
      <div className>
        <GridList cellHeight={260} cols={3}>
          {categoriesImg.map(tile => (
            <GridListTile key={tile.id}>
              <img src={tile.url} />
            </GridListTile>
          ))}
        </GridList>
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

export default Categories;