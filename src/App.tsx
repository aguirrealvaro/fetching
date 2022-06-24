import React, { FunctionComponent } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
/* import { AsyncFetch } from "./AsyncFetch";
import { Axios } from "./Axios";
import { Fetch } from "./Fetch"; */
import { ReactQueryDevtools } from "react-query/devtools";
import { ReactQuery } from "./ReactQuery";

const queryClient = new QueryClient();

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
