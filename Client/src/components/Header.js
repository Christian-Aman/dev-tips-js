import React from 'react';
import { Link as LinkUI } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <nav>
      <Link to='/'>
        <LinkUI component='button' variant='body1' className={classes.link}>
          Home
        </LinkUI>
      </Link>

      <Link to='/browse'>
        <LinkUI component='button' variant='body1' className={classes.link}>
          Browse
        </LinkUI>
      </Link>
      <Link to='/addtip'>
        <LinkUI component='button' variant='body1' className={classes.link}>
          Add Tip
        </LinkUI>
      </Link>
    </nav>
  );
};

export default Header;
