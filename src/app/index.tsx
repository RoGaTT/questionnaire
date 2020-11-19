import { Helmet } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import React, { FC, lazy, Suspense } from 'react';

import { ROUTES } from '@/constants/routes';
import { Layout } from './Layout';

const HomePage = lazy(() => import('./Home'));
const NotFoundPage = lazy(() => import('./NotFound'));

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
      <Suspense fallback={<span>adasdas</span>}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={HomePage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Layout>
    <div
      id="portal-root"
      style={{
        width: 0,
        height: 0,
        visibility: 'hidden',
      }}
    />
  </>
);

export default Home;
