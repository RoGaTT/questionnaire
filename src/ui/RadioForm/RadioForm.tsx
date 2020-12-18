import React, { FC } from 'react';
import classes from './RadioForm.module.scss';
import RadioButton from '@/ui/RadioButton';
import clsx from 'clsx';

type IProps = {
    onChange: Function;
    name: string;
    answers?: string[];
}

type ButtonType = {
  color: string;
  size: string;
}

const RadioForm: FC<IProps> = ({ name, onChange, answers }) => {
  const buttonArray: ButtonType[] = [
    {
      color: 'darkgreen',
      size: 'largest',
    },
    {
      color: 'green',
      size: 'large',
    },
    {
      color: 'yellow',
      size: 'small',
    },
    {
      color: 'orange',
      size: 'small',
    }, 
    {
      color: 'red',
      size: 'large',
    },
    {
      color: 'darkred',
      size: 'largest',
    },
  ];

  const answerClass = answers ? classes.hasAnswerLabel : ''

  return (
    /*
    ~Связь кнопок - одно и то же name у тех, что должны быть связаны
    ~Нажатие на кнопку = нажатие на label - соответствующий id = соответствующий htmlFor
    */
    <form className={`${classes.formQuestion} ${answerClass}`}>
      {
        buttonArray.map((button, buttonIndex) => (
          <RadioButton
            name={name}
            className={clsx(classes.item, classes[button.color], classes[button.size])}
            id={`${name}_${buttonIndex}`}
            answer={answers && answers[buttonIndex] ? answers[buttonIndex] : undefined}
            value={buttonIndex + 1}
            key={buttonIndex}
            onChange={onChange}
          />
        ))
      }
    </form>
  );
};

export default RadioForm;
