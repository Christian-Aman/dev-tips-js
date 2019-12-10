import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTips } from '../../actions/tipActions';
import { getTags } from '../../actions/tagActions';
import PropTypes from 'prop-types';
import Card from './Card';

const Browse = props => {
  const { getTips, getTags, tips, tags } = props;
  useEffect(() => {
    getTips();
    getTags();
    console.log(tags);
  }, []);

  return (
    <div className='Browse'>
      Browse tips
      {tips.map(x => {
        return (
          <Card key={x._id} title={x.title} desc={x.desc} link={x.link} id={x._id} tags={x.tags} />
        );
      })}
    </div>
  );
};

Browse.propTypes = {
  tips: PropTypes.array.isRequired,
  getTips: PropTypes.func.isRequired,
  getTags: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tips: state.tips,
  tags: state.tags,
});

export default connect(
  mapStateToProps,
  { getTips, getTags }
)(Browse);
