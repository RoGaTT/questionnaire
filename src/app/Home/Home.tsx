import React, { FC } from 'react';
import classes from './style.module.scss';

const Layout: FC = ({ children }) => {
  // const { pathname } = useLocation();
  console.log(classes);
  return (
    <div className={classes.root}>
      dasdaas
    </div>
  );
};

export default Layout;
