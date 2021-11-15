import React from 'react';
import ReactDOM from 'react-dom';
import APIProvider from 'api/APIProvider';
import {ErrorBoundary} from 'ui';

import './index.css';
import {App} from './pages/App';
import * as Sentry from '@sentry/react';
import {Integrations} from '@sentry/tracing';
import {SENTRY_KEY, ENVIRONMENT} from './config';
if (ENVIRONMENT !== 'development') {
  Sentry.init({
    dsn: SENTRY_KEY,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}
const rootElement = document.getElementById('root');
ReactDOM.render(
  <APIProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </APIProvider>,
  rootElement,
);
