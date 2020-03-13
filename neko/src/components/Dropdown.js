import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: ''
    }
  }

  handleBreed = event => {
    this.setState({ breed: event.target.value })
  }
  render() {

    // console.log(this.state)
    return (
      <div>
        <FormControl>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select onClick={this.handleBreed} native defaultValue="" input={<Input id="grouped-native-select" />}>
          <optgroup label="Category 1">
            <option value="abys">Abyssianian</option>
            <option value="aege">Aegean</option>
          </optgroup>
        </Select>
      </FormControl>
      {this.state.breed}
      </div>
    )
  }
}

export default Dropdown;