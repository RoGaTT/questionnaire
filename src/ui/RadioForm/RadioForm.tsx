/* eslint-disable react/no-array-index-key */
import React, { FC, useCallback, useMemo } from 'react';
import RadioButton from '@/ui/RadioButton';
import clsx from 'clsx';
import classes from './RadioForm.module.scss';

type IProps = {
    onChange: Function;
    name: string;
    answersAmount: number;
    value: number | undefined;
    options: string[];
}

type ButtonType = {
  color: string;
  size: string;
}

const RadioForm: FC<IProps> = ({
  name, onChange, answersAmount, value, options,
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
    if (answersAmount === 4) {
      return [
        { color: COLORS[1], size: SIZES[0] },
        { color: COLORS[2], size: SIZES[1] },
        { color: COLORS[3], size: SIZES[2] },
        { color: COLORS[4], size: SIZES[3] },
      ];
    }
    if (answersAmount === 6) {
      return [
        { color: COLORS[0], size: SIZES[0] },
        { color: COLORS[1], size: SIZES[1] },
        { color: COLORS[2], size: SIZES[2] },
        { color: COLORS[3], size: SIZES[2] },
        { color: COLORS[4], size: SIZES[1] },
        { color: COLORS[5], size: SIZES[0] },
      ];
    }
    return new Array(answersAmount).fill({ color: COLORS[1], size: SIZES[1] });
  }, [COLORS, SIZES, answersAmount]);

  const handleOnChange = useCallback((value: number) => () => {
    onChange(value);
  }, [onChange]);

  return (
    <form className={clsx(classes.formQuestion, options.length ? classes.formHasAnswer : '')}>
      {
        itemsConfig.map((button, buttonIndex) => (
          <RadioButton
            name={name}
            className={
              clsx(
                classes.item,
                classes[button.color],
                classes[button.size],
                options.length ? classes.itemHasAnswer : '',
              )
            }
            id={`${name}_${buttonIndex}`}
            answer={options && options[buttonIndex] ? options[buttonIndex] : undefined}
            checked={value === buttonIndex + 1}
            key={`${name}_button_${buttonIndex}`}
            onChange={handleOnChange(buttonIndex + 1)}
          />
        ))
      }
    </form>
  );
};

export default RadioForm;
