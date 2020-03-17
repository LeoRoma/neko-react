import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class DropdownCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ''
    }
  }

  handleCategory = event => {
    this.props.getCategoriesImg(event.target.value )
  };

  render() {
    const categories = this.props.categories;
    console.log(categories)
    const optionCategories = categories.map((category) => 
      <option value={category.id}>{category.name}</option>
      // console.log(category.name)
    ) 
    return (
      <div>
        <FormControl>
          
        <InputLabel htmlFor="grouped-native-select"></InputLabel>
        <h2>Select a category</h2> 
        <Select onClick={this.handleCategory} native defaultValue="" input={<Input id="grouped-native-select" />}>
          <optgroup label="Categories">
            {optionCategories}
          </optgroup>
        </Select>
      </FormControl>
      {this.state.breed}
      </div>
    )
  }
}

export default DropdownCategories;