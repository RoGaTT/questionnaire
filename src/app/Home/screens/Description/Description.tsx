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
        <h3>Some title to make me feel major!!!!!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore perferendis, dicta aspernatur fuga quasi placeat, et expedita ipsa veritatis, quaerat sint. Vero ut culpa fugiat a tempore tempora eos hic, consequatur doloremque officiis nihil natus corrupti odio, necessitatibus aperiam enim nobis? Recusandae eum corrupti culpa harum unde nemo, quibusdam quidem nisi ipsa eligendi minus labore eaque, atque cum rem explicabo. Dolorem tempora quasi sint nemo, iure molestiae, impedit ad deserunt magni enim odio nulla odit dolor officiis dicta hic eius blanditiis. Quia asperiores quasi et dolorem nemo saepe officiis. Est deleniti porro nisi ducimus laboriosam exercitationem, nesciunt illum quis.</p>
      </div>
    </div>
  );
};

export default Description;
