import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const DropdownBreed = ({ breeds, handleDropdowns }) => {

  const optionBreeds = breeds.map((breed) =>
    <option value={breed.id}>{breed.name}</option>
  );

  const handleDropdown = event => {
    handleDropdowns(event)
  };

  return (
    <FormControl key={breeds.id}>
      <InputLabel htmlFor="grouped-native-select"></InputLabel>
      <h2>Select a breed</h2>
      <Select onClick={handleDropdown} name="imageId" native defaultValue="" input={<Input id="grouped-native-select" />}>
        <optgroup label="Breeds">
          <option value="">None</option>
          {optionBreeds}
        </optgroup>
      </Select>
    </FormControl>
  )
};

export default DropdownBreed;