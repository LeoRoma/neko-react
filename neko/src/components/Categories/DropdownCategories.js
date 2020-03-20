import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class DropdownCategories extends Component {
  constructor(props) {
    super(props);
  }

  handleCategory = event => {
    event.preventDefault()
    let category = '';
    let format = '';
    if (event.target.name === category){
      category += event.target.value
      console.log(category)
    }else{
      format += event.target.value
    }
    // [event.target.name] = event.targe.value
    this.props.getCategoriesImg(category, format)
  };

  render() {
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
              <h6>Category</h6>
              <Select name="category" onClick={this.handleCategory} native defaultValue="" input={<Input id="grouped-native-select" />}>
                <optgroup label="Categories">
                  {optionCategories}
                </optgroup>
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <FormControl>

              <InputLabel htmlFor="grouped-native-select"></InputLabel>
              <h6>Type</h6>
              <Select name="format" onClick={this.handleCategory} native defaultValue="" input={<Input id="grouped-native-select" />}>
                <optgroup label="Type">
                  <option value="gif">Animated</option>
                </optgroup>
              </Select>
            </FormControl>
          </div>
        </div>

      </div>
    )
  }
}

export default DropdownCategories;