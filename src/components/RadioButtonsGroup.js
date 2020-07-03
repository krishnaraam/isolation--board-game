import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup(props) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const mainTitle = props.mainTitle
  const radioLabels = props.radioLabels

  const [value, setValue] = React.useState(radioLabels[0]);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{mainTitle}</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          {
          radioLabels.map((text, index) => (
            <FormControlLabel value={text} control={<Radio />} label={text} />
          ))
          }
      </RadioGroup>
    </FormControl>
  );
}