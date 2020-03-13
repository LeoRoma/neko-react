import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Dropdown from './Dropdown';

const Frame = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Dropdown/>
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} />
        
      </Container>
    </React.Fragment>
  )
}
export default Frame;
