import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


  const DropDown = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ mt: 2, minWidth: 300 }}>
        {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
        <Select
        margin="normal"
        fullWidth
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
        //   label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Point Guard(PG)</MenuItem>
          <MenuItem value={2}>Shooting Guard(SG)</MenuItem>
          <MenuItem value={3}>Small Forword(SF)</MenuItem>
          <MenuItem value={4}>Power Forword(PF)</MenuItem>
          <MenuItem value={5}>Center(C)</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
  }
export default DropDown;