/* eslint-disable max-len */
import React, { FC, useCallback, useState } from 'react';
import classes from './Home.module.scss';

import FinalScreen from './screens/Final';
import FormScreen from './screens/Form';
import TestScreen from './screens/Test';

enum ScreenEnum {
  Final = 'description',
  Form = 'form',
  Test = 'test',
}

const Home: FC = () => {
  const [screenName, setScreen] = useState<ScreenEnum>(ScreenEnum.Form);

  const handleOnSubmit = useCallback((answers: object) => {
    const userDataJSON = localStorage.getItem('userData');
    const answersJSON = localStorage.getItem('answers');
    console.log(userDataJSON, answersJSON);
    setScreen(ScreenEnum.Final);
  }, []);

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
            <TestScreen onSubmit={handleOnSubmit} />
            )
          }
          {
            screenName === ScreenEnum.Final && (
              <FinalScreen />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
