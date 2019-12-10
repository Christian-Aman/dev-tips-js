import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: '#fff',
    borderColor: '#fff',
  },
}));

const Redirect = props => {
  const doRedirect = () => {
    window.open(props.to, '_blank');
  };

  const classes = useStyles();

  return (
    <Button onClick={doRedirect} variant='outlined' className={classes.button}>
      Check out!
    </Button>
  );
};

export default Redirect;
