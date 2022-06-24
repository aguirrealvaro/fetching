import { QueryFunctionContext } from "react-query";
import { fetcher } from "./fetcher";
import { GetUserQueryKeyType, EditUserReturnType, EditUserVariablesType, UserType } from "./types";

export const getUsers = (): Promise<UserType[]> => {
  return fetcher("https://jsonplaceholder.typicode.com/todos/");
};

export const getUser = ({ queryKey }: QueryFunctionContext<GetUserQueryKeyType>): Promise<UserType> => {
  const [_, id] = queryKey;

  return fetcher(`https://jsonplaceholder.typicode.com/todos/${id}`);
};

export const editUser = ({ id, newTitle }: EditUserVariablesType): Promise<EditUserReturnType> => {
  return fetcher(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title: newTitle }),
  });
};
