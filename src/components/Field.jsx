import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const Field = ({
  placeholder, valid, children, defaultValue, type, values, required,
  onClick, onChange, label,
}) => {
  const classes = useStyles();
  if (type === 'button') {
    return (
      <Button
        disabled={!valid}
        variant="contained"
        size="large"
        onClick={onClick}
        fullWidth
        color="secondary"
        className={classes.button}
      >
        {children}
      </Button>
    );
  } else if (type === 'select') {
    return (
      <FormControl
        required={required}
        fullWidth
        margin="dense"
      >
        <InputLabel>{label}</InputLabel>
        <NativeSelect onChange={onChange}>
          <option value="" />
          { values.map(({ value, label }, index) => <option key={value} value={value}>
            {label}
          </option>) }
        </NativeSelect>
      </FormControl>
    );
  }
  return (
    <TextField
      fullWidth
      margin="dense"
      required={required}
      defaultValue={defaultValue}
      onChange={onChange}
      label={label}
    />
  );
};

Field.displayName = 'Field';

export default Field;
