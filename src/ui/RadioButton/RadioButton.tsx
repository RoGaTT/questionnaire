/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { FC } from 'react';

type IProps = {
  id: string;
  className?: string;
  onChange: Function;
  checked: boolean;
  label?: string;
}

const RadioButton: FC<IProps> = ({
  className, id, onChange, label, checked,
}) => (
  <div className={className}>
    <label htmlFor={id}>
      <input
        onChange={() => onChange()}
        checked={checked}
        id={id}
        type="radio"
      />
      <span />
      {label && <p>{ label }</p>}
    </label>
  </div>
);

export default RadioButton;
