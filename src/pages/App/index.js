import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from 'pages/PageNotFound';
import Helmet from 'react-helmet';

const App = () => (
  <div>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>Mart Clone v1</title>
    </Helmet>
    <Switch>
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;
