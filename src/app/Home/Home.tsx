/* eslint-disable max-len */
import { sendAnswers } from '@/api/test';
import { ISendTestAnswers, TestNameEnum } from '@/types/test';
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

  const handleOnSubmit = useCallback(async () => {
    // const userDataJSON = localStorage.getItem('userData');
    const answersJSON = localStorage.getItem('answers');

    try {
      if (!answersJSON) throw new Error('Invalid JSON');
      const answers: ISendTestAnswers['answers'] = JSON.parse(answersJSON);
      await sendAnswers({
        // eslint-disable-next-line @typescript-eslint/camelcase
        questionnary_name: TestNameEnum.Zaslon,
        answers,
      });
      setScreen(ScreenEnum.Final);
    } catch (e) {
      console.log(e);
    }
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
