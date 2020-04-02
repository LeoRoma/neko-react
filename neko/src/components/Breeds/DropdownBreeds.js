import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class DropdownBreeds extends Component {

  handleBreed = event => {
    this.props.getBreed(event.target.value);
    this.props.getBreedImg(event.target.value);
  };

  render() {
    const breeds = this.props.breeds;
    const optionBreeds = breeds.map((breed) =>
      <option value={breed.id}>{breed.name}</option>
    )
    return (
      <div>
        <FormControl className="dropdown">
          <InputLabel htmlFor="grouped-native-select"></InputLabel>
          <h7>Select a breed</h7>
          <Select
            onClick={this.handleBreed}
            native defaultValue=""
            input={<Input id="grouped-native-select" />}
            style={{ width: "1050px" }}
          >
            <optgroup label="Breeds">
              {optionBreeds}
            </optgroup>
          </Select>
        </FormControl>
      </div>
    )
  }
}

export default DropdownBreeds;