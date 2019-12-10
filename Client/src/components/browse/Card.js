import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Link from '../util/Link';
// eslint-disable-next-line
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { deleteTip } from '../../actions/tipActions';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 5),
    background: '#333',
    color: 'white',
    '& .MuiExpationPanel-root': {
      '& .MuiExpanded': {
        margin: theme.spacing(1, 10),
      },
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Card = props => {
  const { id, title, desc, link, tags, tagList } = props;
  const classes = useStyles();

  // eslint-disable-next-line
  const deleteThisTip = () => {
    props.deleteTip(id);
  };

  return (
    <div>
      <ExpansionPanel square={true} className={classes.root}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography className={classes.heading}>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.mb}>
          <Typography>
            {desc}
            <Link to={link} text='Check out!' />
            <DeleteIcon onClick={deleteThisTip} />
            {tags &&
              tags.map(tag => (
                <Chip
                  variant='outlined'
                  size='small'
                  // avatar={<Avatar>M</Avatar>}
                  label={tagList[tag]}
                  // onClick={handleClick}
                />
              ))}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

Card.propTypes = {
  deleteTip: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tagList: state.tags,
});

export default connect(
  mapStateToProps,
  { deleteTip }
)(Card);
