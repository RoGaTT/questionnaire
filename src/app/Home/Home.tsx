/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import classes from './Home.module.scss';

import DescriptionScreen from './screens/Description';
import FormScreen from './screens/Form';
import TestScreen from './screens/Test';

enum ScreenEnum {
  Description = 'description',
  Form = 'form',
  Test = 'test',
}

const Home: FC = () => {
  const [screenName, setScreen] = useState<ScreenEnum>(ScreenEnum.Form);// тут менять

  return (
    <div className="container">
      <div className={classes.root}>
        <div className={classes.content}>
          {
            screenName === ScreenEnum.Form && (
            <FormScreen goNext={(form: object) => {
              console.log(form);
              setScreen(ScreenEnum.Test);
            }}
            />
            )
          }
          {
            screenName === ScreenEnum.Test && (
            <TestScreen onSubmit={(answers: number[]) => {
              console.log(answers);
              setScreen(ScreenEnum.Description);
            }}
            />
            )
          }
          {
            screenName === ScreenEnum.Description && (<DescriptionScreen goNext={() => console.log('Ответ сохранен')} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
