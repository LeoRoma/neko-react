import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Dropdown from './Dropdown';
import Nav from './Nav';
import Cats from './Cats';
import Categories from './Categories';

class Frame extends Component {


  render() {
    
    return (
      <React.Fragment>
        <CssBaseline />

        <Container class="border border-dark" fixed>

          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '60vh' }}>
            {/* <Nav /> */}
            <Dropdown
              getBreed={this.props.getBreed.bind(this)}
              breeds={this.props.breeds} />
            <Cats
              cats={this.props.cats}
            />
            <Categories
              categories={this.props.categories}
            />
          </Typography>

        </Container>
      </React.Fragment>
    )
  }
};
export default Frame;
