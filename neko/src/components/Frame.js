import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Categories from './Categories/Categories';
import Cats from './Breeds/Cats';
import DropdownBreeds from './Breeds/DropdownBreeds';
import DropdownCategories from './Categories/DropdownCategories';
import Tabs from './Tabs';

class Frame extends Component {


  render() {

    return (
      <React.Fragment>
        <CssBaseline />
        <Container class="border border-dark" fixed>
          <DropdownCategories
            categories={this.props.categories}
            getCategoriesImg={this.props.getCategoriesImg.bind(this)}
          />
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '60vh' }}>
            <DropdownBreeds
              getBreed={this.props.getBreed.bind(this)}
              breeds={this.props.breeds}
            />

            <Cats
              cats={this.props.cats}
            />
            <Categories
              categoriesImg={this.props.categoriesImg}
            />
            <Tabs />
          </Typography>
        </Container>
      </React.Fragment>
    )
  }
};
export default Frame;
