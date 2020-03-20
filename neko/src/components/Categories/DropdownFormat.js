import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class DropdownFormat extends Component {
  constructor(props) {
    super(props);
  }

  handleFormat = event => {
    this.props.getCategoriesImg(event.target.value)
  };

  render() {
    // const categories = this.props.categories;
    // const optionCategories = categories.map((category) =>
    //   <option value={category.id}>{category.name}</option>
    // )
    return (
      <div>
        <FormControl>

          <InputLabel htmlFor="grouped-native-select"></InputLabel>
          <h6>Type</h6>
          <Select onClick={this.handleFormat} native defaultValue="" input={<Input id="grouped-native-select" />}>
            <optgroup label="Type">
              <option value="gif">Animated</option>
            </optgroup>
          </Select>
        </FormControl>
       
      </div>
    )
  }
};

export default DropdownFormat;