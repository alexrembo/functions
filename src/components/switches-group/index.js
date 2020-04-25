import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import { Content } from './styled';

const SwitchesGroup = ({ data, handleChange }) => {
  return (
    <Content>
      <FormControl component="fieldset">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          {data.map((item, index) => (
            <FormControlLabel
              key={item.id}
              control={<Switch checked={item.isActive} color="primary" onChange={handleChange} name={item.name} id={item.id} />}
              label={item.name + index}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Content>
  );
}

export default SwitchesGroup;