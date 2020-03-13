import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Dropdown from './Dropdown';
import Cats from './Cats'

class Frame extends Component {


  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Dropdown
          getBreed={this.props.getBreed.bind(this)} 
          breeds={this.props.breeds}/>
        <Container fixed>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }}>
            <Cats
              cats={this.props.cats}
            />
          </Typography>

        </Container>
      </React.Fragment>
    )
  }
};
export default Frame;
