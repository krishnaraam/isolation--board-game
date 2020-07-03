import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

export default function SimpleSelects(props) {
  const title = props.title
  const options = props.options
  const helperText = props.helperText
  
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
        >
          {
            options.map((val, index) => (
              <MenuItem value={val} style={{fontWeight:'bold'}}>{val}</MenuItem>
            ))
          }
        </Select>
         
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
}
