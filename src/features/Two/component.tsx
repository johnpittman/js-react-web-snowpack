import './style.css';

import React from 'react';

export interface HomeProps {}

function Home() {
  const baseClassName = 'Home';
  const classNames = {
    root: baseClassName,
    icon: `${baseClassName}__icon`
  };

  return <div className={classNames.root}>Home</div>;
}

export default Home;
