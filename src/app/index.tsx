import React, { FC } from 'react';
import '@/assets/reset.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { Layout } from './Layout';

import HomePage from './Home';
import NotFoundPage from './NotFound';

const Home: FC = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Helmet>
    <Layout>
      <Switch>
        <Route path={ROUTES.HOME} exact component={HomePage} />
        <Route path="*" exact component={NotFoundPage} />
      </Switch>
    </Layout>
  </>
);

export default Home;
