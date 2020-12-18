/* eslint-disable max-len */
import React, { FC } from 'react';
import classes from './Description.module.scss';

interface IProps {
  goNext: Function;
}

const Description: FC<IProps> = ({ goNext }) => {
  console.log('object');
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h3>Ответ записан</h3>
      </div>
    </div>
  );
};

export default Description;
