import React, { FC } from 'react';

type IProps = {
  name: string;
  id?: string;
}

const RadioButton: FC<IProps> = (props) => <input type="radio" {...props} />;

export default RadioButton;
