import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class DropdownBreedImg extends Component {

  handleBreed = event => {
    this.props.getBreedImg(event.target.value)
  }
  render() {
    const breeds = this.props.breeds;

    const optionBreeds = breeds.map((breed) =>
      <option value={breed.id}>{breed.name}</option>
    )

    const categories = this.props.categories;
    const optionCategories = categories.map((category) =>
      <option value={category.id}>{category.name}</option>
    )
    return (
      <div>
        <div className="row">
          <div className="col">
            <FormControl>
              <InputLabel htmlFor="grouped-native-select"></InputLabel>
              <h2>Select a breed</h2>
              <Select onClick={this.handleBreed} native defaultValue="" input={<Input id="grouped-native-select" />}>
                <optgroup label="Breeds">
                  {optionBreeds}
                </optgroup>
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <FormControl>
              <InputLabel htmlFor="grouped-native-select"></InputLabel>
              <h2>Select a breed</h2>
              <Select onClick={this.handleBreed} native defaultValue="" input={<Input id="grouped-native-select" />}>
                <optgroup label="Breeds">
                  {optionBreeds}
                </optgroup>
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <FormControl>

              <InputLabel htmlFor="grouped-native-select"></InputLabel>
              <h6>Category</h6>
              <Select name="category" onClick={this.handleCategory} native defaultValue="" input={<Input id="grouped-native-select" />}>
                <optgroup label="Categories">
                  {optionCategories}
                </optgroup>
              </Select>
            </FormControl>
          </div>
        </div>

      </div>
    )
  }
}

export default DropdownBreedImg;