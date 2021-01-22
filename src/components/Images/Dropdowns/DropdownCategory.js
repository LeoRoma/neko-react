import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const DropdownCategory = ({ categories, handleDropdowns }) => {

  const optionCategories = categories.map((category) =>
    <option value={category.id}>{category.name}</option>
  );

  const handleDropdown = event => {
    handleDropdowns(event)
  };

  return (
    <FormControl key={categories.id}>
      <InputLabel htmlFor="grouped-native-select"></InputLabel>
      <h6>Category</h6>
      <Select
        onClick={handleDropdown}
        name="imageId" native defaultValue=""
        input={<Input id="grouped-native-select" />}
        style={{ width: "300px" }}
      >
        <optgroup label="Breeds">
          <option value="">None</option>
          {optionCategories}
        </optgroup>
      </Select>
    </FormControl>
  )
};

export default DropdownCategory;