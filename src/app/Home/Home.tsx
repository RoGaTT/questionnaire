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
  const [screenName, setScreen] = useState<ScreenEnum>(ScreenEnum.Test);

  return (
    <div className="container">
      <div className={classes.root}>
        <div className={classes.content}>
          {
            screenName === ScreenEnum.Description && (<DescriptionScreen goNext={() => setScreen(ScreenEnum.Form)} />)
          }
          {
            screenName === ScreenEnum.Form && (<FormScreen goNext={() => setScreen(ScreenEnum.Test)} />)
          }
          {
            screenName === ScreenEnum.Test && (<TestScreen onSubmit={() => console.log('Fuck this shit!')} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
