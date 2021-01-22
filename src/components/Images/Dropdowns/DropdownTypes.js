import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const DropdownTypes = ({ handleDropdowns }) => {

  const handleDropdown = event => {
    handleDropdowns(event)
  };

  return (
    <FormControl>
      <InputLabel htmlFor="grouped-native-select"></InputLabel>
      <h6>Images</h6>
      <Select
        onClick={handleDropdown}
        name="selector"
        native defaultValue=""
        input={<Input id="grouped-native-select" />}
        style={{ width: "300px" }}
      >
        <optgroup label="Images">
          <option value="">None</option>
          <option value="breed">Breed</option>
          <option value="category">Category</option>
        </optgroup>
      </Select>
    </FormControl>
  )
};

export default DropdownTypes;