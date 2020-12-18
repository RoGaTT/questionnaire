/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { FC } from 'react';

type IProps = {
  name: string;
  id: string;
  className?: string;
  value: number;
  onChange: Function;
  answer?: string;
}

const RadioButton: FC<IProps> = ({
  className, id, name, value, onChange, answer
}) => (
  <div className={className}>
    <label htmlFor={id}>
      <input onChange={() => onChange(value)} value={value} id={id} type="radio" name={name} />
      <span></span>
      {answer &&
        <b>{ answer }</b>
      }
    </label>
  </div>
);

export default RadioButton;