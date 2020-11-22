import clsx from 'clsx';
import React, { FC, useEffect } from 'react';
import classes from './Header.module.scss';

const Header: FC = () => {
  useEffect(() => {
    console.log('object');
  }, []);
  return (
    <div className={classes.rootContainer}>
      <div className={clsx('container', classes.root)}>
        <div className={classes.logo}><span>Questionnaire</span></div>
      </div>
    </div>
  );
};

export default Header;
