import React, { FunctionComponent } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ReactQuery } from "./components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const App: FunctionComponent = () => {
  return (
    <>
      {/* <Fetch /> */}
      {/* <AsyncFetch /> */}
      {/* <Axios /> */}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <ReactQuery />
      </QueryClientProvider>
    </>
  );
};
