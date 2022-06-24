/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { QueryFunctionContext } from "react-query";
import { fetcher } from "./fetcher";

export const getUsers = () => {
  return fetcher("https://jsonplaceholder.typicode.com/todos/");
};

export const getUser = ({ queryKey }: QueryFunctionContext) => {
  const [_, id] = queryKey;

  return fetcher(`https://jsonplaceholder.typicode.com/todos/${id}`);
};

export type EditUserVariablesType = { id: string; newTitle: string };

export type EditUserReturnType = { id: number };

export const editUser = ({ id, newTitle }: EditUserVariablesType) => {
  return fetcher(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title: newTitle }),
  });
};
