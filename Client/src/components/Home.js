import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  return (
    <div>
      Home
      {history.push('/browse')}
    </div>
  );
};

export default Home;
