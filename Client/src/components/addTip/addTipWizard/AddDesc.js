import React, { useState } from 'react';
import DisplayErrors from '../util/DisplayErrors';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 600,
    maxWidth: '60%',
    color: '#fff',
    borderColor: '#fff',
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& lable': {
      color: '#fff',
      borderColor: '#fff',
    },
    '& label.Mui-focused': {
      color: '#fff',
      borderColor: '#fff',
    },
    '& .MuiInput-underline:after': {
      color: '#fff',
      borderColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': {
        color: 'white',
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
  button: {
    margin: theme.spacing(1),
    color: '#fff',
    borderColor: '#fff',
    '&$disabled': {
      color: 'white',
    },
  },
  input: {
    display: 'none',
  },
}));

export const AddDesc = props => {
  const [desc, setdesc] = useState('');
  const [error, setError] = useState('');
  const [descValid, setdescValid] = useState(false);

  const classes = useStyles();

  const cb = () => {
    props.returnData({ desc });
  };

  const handleUserInput = event => {
    const value = event.target.value;
    setdesc(value);
    validate(value);
  };

  const validate = value => {
    let validationError = error;

    const valueValid = /^([\w\W]{10,})$/i.test(value);

    validationError = valueValid ? '' : 'The desc needs to be atleast 10 characters long';
    setdescValid(valueValid);
    setError(validationError);
  };

  return (
    <div>
      <DisplayErrors error={error} />
      <div>
        <TextField
          id='desc'
          className={classes.textField}
          multiline
          rowsMax='8'
          label='desc'
          margin='normal'
          variant='outlined'
          onChange={e => handleUserInput(e)}
        />
      </div>
      <Button onClick={cb} disabled={!descValid} variant='outlined' className={classes.button}>
        Next
      </Button>
    </div>
  );
};

export default AddDesc;
