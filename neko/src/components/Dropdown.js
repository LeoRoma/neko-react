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
    this.props.getBreed(this.state.breed)
  }
  render() {
    const breeds = this.props.breeds;
    breeds.map((breed) => {
      console.log(breed.id)
    })
    const optionBreeds = breeds.map((breed) => 
      <option key={breed.id}>{breed.name}</option>
    ) 
    return (
      <div>
        <FormControl>
        <InputLabel htmlFor="grouped-native-select"></InputLabel>
        <Select onClick={this.handleBreed} native defaultValue="" input={<Input id="grouped-native-select" />}>
          <optgroup label="Category 1">
            {optionBreeds}
          </optgroup>
        </Select>
      </FormControl>
      {this.state.breed}
      </div>
    )
  }
}

export default Dropdown;