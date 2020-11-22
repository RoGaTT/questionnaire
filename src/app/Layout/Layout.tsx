import React, { FC } from 'react';
import clsx from 'clsx';
import classes from './Layout.module.scss';
import { Header } from './components/Header';
// import { useLocation } from 'react-router-dom';
// import clsx from 'clsx';

const Layout: FC = ({ children }) => (
  <div className={clsx(classes.root)}>
    <Header />
    <div className={classes.content}>
      {children}
    </div>
  </div>
);

export default Layout;
// const { pathname } = useLocation();
