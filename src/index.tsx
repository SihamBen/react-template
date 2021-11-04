import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import APIProvider from 'api/APIProvider';
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

ReactDOM.render(
  <APIProvider>
    <App />
  </APIProvider>,
  document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
