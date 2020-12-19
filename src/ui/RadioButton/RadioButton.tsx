/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { FC } from 'react';

type IProps = {
  name: string;
  id: string;
  className?: string;
  onChange: Function;
  checked: boolean;
  answer?: string;
}

const RadioButton: FC<IProps> = ({
  className, id, name, onChange, answer, checked,
}) => (
  <div className={className}>
    <label htmlFor={id}>
      <input onChange={() => onChange()} checked={checked} id={id} type="radio" name={name} />
      <span />
      {answer && <p>{ answer }</p>}
    </label>
  </div>
);

export default RadioButton;
