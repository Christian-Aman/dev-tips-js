import React, { useState } from 'react';
import AddTitle from './AddTitle';
import AddDesc from './AddDesc';
import AddLink from './AddLink';
import SubmitTip from './SubmitTip';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 8),
    background: '#333',
    color: '#fff',
    width: 1024,
    maxWidth: '85%',
  },
}));

const AddTip = () => {
  const [state, setState] = useState({
    id: null,
    title: null,
    desc: null,
    tags: null,
    category: null,
  });
  const [step, setStep] = useState(0);

  const dataCallback = data => {
    setState({ ...state, ...data });
    setStep(step + 1);
  };

  const renderStep = step => {
    const { title } = state;
    switch (step) {
      case 0:
        return <AddTitle returnData={dataCallback} />;
      case 1:
        return <AddDesc title={title} returnData={dataCallback} />;
      case 2:
        return <AddLink title={title} returnData={dataCallback} />;
      default:
        return <SubmitTip props={state} />;
    }
  };

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant='h3' component='h2'>
        Add Tip
        <hr />
      </Typography>
      {renderStep(step)}
    </Paper>
  );
};

export default AddTip;
