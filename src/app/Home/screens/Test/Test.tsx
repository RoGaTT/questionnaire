import RadioForm from '@/ui/RadioForm';
import React, { FC } from 'react';
import QUESTIONS from '@/constants/questions';
import classes from './Test.module.scss';

interface IProps {
  onSubmit: Function;
}

const Test: FC<IProps> = () => {
  console.log('object');
  return (
    <div className={classes.root}>
      <div className="title" />
      <div className="content">
        {
          QUESTIONS.map((question, questionIndex) => (
            <div className="question" key={question.id}>
              <span>{question.text}</span>
              <RadioForm
                name={question.id}
                onChange={() => console.log('sa')}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Test;
