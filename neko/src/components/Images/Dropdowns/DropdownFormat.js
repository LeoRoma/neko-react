import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const DropdownFormat = ({ handleDropdowns }) => {

  const handleDropdown = event => {
    handleDropdowns(event)
  };

  return (
    <FormControl>
      <InputLabel htmlFor="grouped-native-select"></InputLabel>
      <h2>Type</h2>
      <Select name="type" onClick={handleDropdown} native defaultValue="" input={<Input id="grouped-native-select" />}>
        <optgroup label="Type">
          <option value="">All</option>
          <option value="jpg">Static</option>
          <option value="gif">Animated</option>
        </optgroup>
      </Select>
    </FormControl>
  )
};

export default DropdownFormat;