import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Redirect from './Redirect';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1),
  },
}));

const Link = props => {
  const classes = useStyles();
  return /^https?:\/\//.test(props.to) ? (
    <Redirect to={props.to} text={props.text} />
  ) : (
    <RouterLink to={props.to} component='button' variant='body1' className={classes.link}>
      {props.text}
    </RouterLink>
  );
};

export default Link;
