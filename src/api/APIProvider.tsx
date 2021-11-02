import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
//import {showError} from 'ui';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      onError: err => console.log(err),
    },
    mutations: {
      onError: err => console.log(err),
    },
  },
});

export default function APIProvider({children}: {children: React.ReactNode}) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
