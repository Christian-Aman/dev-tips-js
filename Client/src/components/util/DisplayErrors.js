import React from 'react';

const DisplayErrors = props => {
  return (
    <div className='errorField'>
      <p>{props.error}</p>
    </div>
  );
};

export default DisplayErrors;
