import React, { FC, useEffect } from 'react';
import classes from './Header.module.scss';

const Header: FC = () => {
  useEffect(() => {
    console.log('object');
  }, []);
  return (
    <div className={classes.root}>
      aasdas
    </div>
  );
};

export default Header;
