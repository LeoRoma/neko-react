import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

class DropdownBreedImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selector: '',
      imageId: ''
    }
  }

  handleImage = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    // this.props.getBreedImg(event.target.value)
    console.log(this.state)
  };

  handleSubmit = event => {
    event.preventDefault();
    let selector = this.state.selector;
    let imageId = this.state.imageId;
    this.props.getImages(selector, imageId);
  };

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
              <h2>Select type of images</h2>
              <Select onClick={this.handleImage} name="selector" native defaultValue="" input={<Input id="grouped-native-select" />}>
                <optgroup label="Breeds">
                  <option value="breed">Breed</option>
                  <option value="category">Category</option>
                </optgroup>
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <FormControl>
              <InputLabel htmlFor="grouped-native-select"></InputLabel>
              <h2>Select a breed</h2>
              <Select onClick={this.handleImage} name="imageId" native defaultValue="" input={<Input id="grouped-native-select" />}>
                <optgroup label="Breeds">
                  {optionBreeds}
                </optgroup>
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <FormControl>
              <InputLabel htmlFor="grouped-native-select"></InputLabel>
              <h2>Category</h2>
              <Select name="category" name="imageId" onClick={this.handleImage} native defaultValue="" input={<Input id="grouped-native-select" />}>
                <optgroup label="Categories">
                  {optionCategories}
                </optgroup>
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <FormControl>
              <InputLabel htmlFor="grouped-native-select"></InputLabel>
              <h2>Category</h2>
              <Select name="category" name="category" onClick={this.handleImage} native defaultValue="" input={<Input id="grouped-native-select" />}>
                <optgroup label="Categories">
                  {optionCategories}
                </optgroup>
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
          </div>
        </div>

      </div>
    )
  }
}

export default DropdownBreedImg;