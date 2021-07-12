import React from 'react';

import useRouter from '../../hooks/useRouter';

const HomePage = () => {
  const { push } = useRouter();

  const choicePage = (page: string) => () => push(`/${page}`);

  return (
    <>
      <h4>Home page</h4>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '50%' }}>
        <span style={{cursor: 'pointer'}} onClick={choicePage('list')}>Go to the list</span>
        &nbsp;
        <span style={{cursor: 'pointer'}} onClick={choicePage('tracker')}>Go to the tracker</span>
      </div>
    </>
  );
};

export default HomePage;
