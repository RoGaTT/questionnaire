/* eslint-disable max-len */
import React, { FC } from 'react';
import classes from './Final.module.scss';

const Final: FC = () => {
  console.log('object');
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h3>Ответ записан</h3>
      </div>
    </div>
  );
};

export default Final;
