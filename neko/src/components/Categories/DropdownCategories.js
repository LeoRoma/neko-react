import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class DropdownCategories extends Component {

  handleCategory = event => {
    event.preventDefault()
    this.props.getCategoriesImg(this.state.category)
  };

  render() {
    const categories = this.props.categories;
    const optionCategories = categories.map((category) =>
      <option value={category.id}>{category.name}</option>
    )
    return (
      <div>
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
    )
  }
}

export default DropdownCategories;