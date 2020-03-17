import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
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
    this.props.getBreed(event.target.value )
  }
  render() {
    const breeds = this.props.breeds;
    
    const optionBreeds = breeds.map((breed) => 
      <option value={breed.id}>{breed.name}</option>
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