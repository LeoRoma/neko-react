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
      imageId: '',
      type: '',
      dropdownCategoryActive: false,
      dropdwonBreedActive: false
    }
  };

  handleImage = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state)
    this.dropdownActivator(event);
  };

  dropdownActivator(event) {
    if (event.target.value === "breed") {
      this.setState({
        dropdownBreedActive: true,
        dropdownCategoryActive: false
      })
      console.log('breed')
    };
    if (event.target.value === "category") {
      this.setState({
        dropdownCategoryActive: true,
        dropdownBreedActive: false
      })
      console.log('category')
    }
  };

  handleSubmit = event => {
    let selector = this.state.selector;
    let imageId = this.state.imageId;
    let type = this.state.type;
    event.preventDefault();
    this.props.getImages(selector, imageId, type);
  };

  render() {
    const breeds = this.props.breeds;
    const categories = this.props.categories;

    const optionBreeds = breeds.map((breed) =>
      <option value={breed.id}>{breed.name}</option>
    );

    const optionCategories = categories.map((category) =>
      <option value={category.id}>{category.name}</option>
    );

    const dropdownBreed =
      <div className="col">
        <FormControl key={breeds.id}>
          <InputLabel htmlFor="grouped-native-select"></InputLabel>
          <h2>Select a breed</h2>
          <Select onClick={this.handleImage} name="imageId" native defaultValue="" input={<Input id="grouped-native-select" />}>
            <optgroup label="Breeds">
              {optionBreeds}
            </optgroup>
          </Select>
        </FormControl>
      </div>

    const dropdownCategory =
      <div className="row">
        <div className="col">
          <FormControl key={categories.id}>
            <InputLabel htmlFor="grouped-native-select"></InputLabel>
            <h2>Category</h2>
            <Select name="imageId" onClick={this.handleImage} native defaultValue="" input={<Input id="grouped-native-select" />}>
              <optgroup label="Categories">
                {optionCategories}
              </optgroup>
            </Select>
          </FormControl>
        </div>
        <div className="col">
          <FormControl>
            <InputLabel htmlFor="grouped-native-select"></InputLabel>
            <h2>Type</h2>
            <Select name="type" onClick={this.handleImage} native defaultValue="" input={<Input id="grouped-native-select" />}>
              <optgroup label="Type">
                <option value="">All</option>
                <option value="jpg">Static</option>
                <option value="gif">Animated</option>
              </optgroup>
            </Select>
          </FormControl>
        </div>
      </div>

    return (
      <div>
        <div className="row">
          <div className="col">
            <FormControl>
              <InputLabel htmlFor="grouped-native-select"></InputLabel>
              <h2>Images</h2>
              <Select onClick={this.handleImage} name="selector" native defaultValue="" input={<Input id="grouped-native-select" />}>
                <optgroup label="Images">
                  <option value="breed">Breed</option>
                  <option value="category">Category</option>
                </optgroup>
              </Select>
            </FormControl>
          </div>
          {this.state.dropdownBreedActive ? dropdownBreed : null}
          {this.state.dropdownCategoryActive ? dropdownCategory : null}
          <div className="col">
            <Button onClick={this.handleSubmit.bind(this)}>Search</Button>
          </div>
        </div>

      </div>
    )
  }
};

export default DropdownBreedImg;