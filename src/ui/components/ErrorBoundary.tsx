import React from 'react';
import * as Sentry from '@sentry/react';

const ErrorPage = err => {
  return <div>oups</div>;
};
interface Props {
  children: React.ReactNode;
}
const myFallback = <ErrorPage />;
export function ErrorBoundary({children}: Props) {
  return (
    <Sentry.ErrorBoundary fallback={myFallback}>
      {children}
    </Sentry.ErrorBoundary>
  );
}
