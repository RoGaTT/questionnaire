/* eslint-disable react/no-array-index-key */
import React, { FC, useCallback, useMemo } from 'react';
import RadioButton from '@/ui/RadioButton';
import clsx from 'clsx';
import classes from './RadioForm.module.scss';

type IProps = {
    onChange: Function;
    name: string;
    value: string | undefined;
    answersAmount?: number;
    answers?: string[];
}

type ButtonType = {
  color: string;
  size: string;
}

const RadioForm: FC<IProps> = ({
  name, onChange, answersAmount, answers, value,
}) => {
  const COLORS = [
    'darkgreen',
    'green',
    'yellow',
    'orange',
    'red',
    'darkred',
  ];
  const SIZES = [
    'largest',
    'large',
    'small',
  ];

  const itemsConfig = useMemo<ButtonType[]>(() => {
    const itemsAmount = answersAmount || answers?.length || 0;
    if (itemsAmount === 4) {
      return [
        { color: COLORS[1], size: SIZES[0] },
        { color: COLORS[2], size: SIZES[1] },
        { color: COLORS[3], size: SIZES[2] },
        { color: COLORS[4], size: SIZES[3] },
      ];
    }
    if (itemsAmount === 6) {
      return [
        { color: COLORS[0], size: SIZES[0] },
        { color: COLORS[1], size: SIZES[1] },
        { color: COLORS[2], size: SIZES[2] },
        { color: COLORS[3], size: SIZES[2] },
        { color: COLORS[4], size: SIZES[1] },
        { color: COLORS[5], size: SIZES[0] },
      ];
    }
    return new Array(itemsAmount).fill({ color: COLORS[1], size: SIZES[1] });
  }, [COLORS, SIZES, answers, answersAmount]);

  const handleOnChange = useCallback((value: string) => () => {
    onChange(value);
  }, [onChange]);

  return (
    <form className={
      clsx(classes.formQuestion, answers?.length ? classes.formHasAnswer : '')
    }
    >
      {
        itemsConfig.map((button, buttonIndex) => {
          const answer = `${buttonIndex + 1}`;
          return (
            <RadioButton
              className={
                clsx(
                  classes.item,
                  classes[button.color],
                  classes[button.size],
                  answers?.length ? classes.itemHasAnswer : '',
                )
              }
              checked={value === answer}
              onChange={handleOnChange(answer)}
              label={answers?.[+answer - 1]}
              id={`${name}_button_${buttonIndex}`}
              key={`${name}_button_${buttonIndex}`}
            />
          );
        })
      }
    </form>
  );
};

export default RadioForm;
