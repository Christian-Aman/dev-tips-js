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

export const AddLink = props => {
  const [link, setlink] = useState('');
  const [error, setError] = useState('');
  const [linkValid, setlinkValid] = useState(false);

  const classes = useStyles();

  const cb = () => {
    props.returnData({ link });
  };

  const handleUserInput = event => {
    const value = event.target.value;
    setlink(value);
    validate(value);
  };

  const validate = value => {
    let validationError = error;

    const valueValid = /^((https?|ftp|smtp):\/\/)?([0-9a-zA-z-#.]*)?(www.)?[a-z0-9-]+\.[a-z]+(\/[a-zA-Z0-9#-.=&?_]+\/?)*$/i.test(
      value
    );

    validationError = valueValid ? '' : 'The link is not valid';
    setlinkValid(valueValid);
    setError(validationError);
  };

  return (
    <div>
      <DisplayErrors error={error} />
      <div>
        <TextField
          id='link'
          className={classes.textField}
          multiline
          rowsMax='5'
          label='link'
          margin='normal'
          variant='outlined'
          onChange={e => handleUserInput(e)}
        />
      </div>
      <Button onClick={cb} disabled={!linkValid} variant='outlined' className={classes.button}>
        Next
      </Button>
    </div>
  );
};

export default AddLink;
