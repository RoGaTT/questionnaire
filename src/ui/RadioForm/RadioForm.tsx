import React, { FC } from 'react';
import RadioButton from '@/ui/RadioButton';

type IProps = {
    onChange: Function;
    name: string;
}

const RadioForm: FC<IProps> = ({ name }) => {
  console.log('object');
  return (
    <form>
      <RadioButton name={name} />
      <RadioButton name={name} />
      <RadioButton name={name} />
      <RadioButton name={name} />
      <RadioButton name={name} />
      <RadioButton name={name} />
      <RadioButton name={name} />
    </form>

  );
};

export default RadioForm;
