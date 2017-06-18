import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import Landing from 'app/containers/LandingContainer';

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '../../../assets/react-toolbox/theme';
import '../../../assets/react-toolbox/theme.css';

function App() {
  return (
    <div>
      <Helmet titleTemplate="ARc - %s">
        <title>Atomic React</title>
        <meta name="description" content="React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="ARc" />
        <meta property="og:image" content="https://arc.js.org/thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="https://arc.js.org/icon.png" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={Landing} exact />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
