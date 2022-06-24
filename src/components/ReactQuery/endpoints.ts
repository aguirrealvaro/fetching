import { QueryFunctionContext } from "react-query";
import { fetcher } from "./fetcher";
import { GetUserQueryKeyType, EditUserReturnType, EditUserVariablesType, UserType } from "./types";

export const getUsers = (): Promise<UserType[]> => {
  return fetcher("todos");
};

export const getUser = ({ queryKey }: QueryFunctionContext<GetUserQueryKeyType>): Promise<UserType> => {
  const [_, id] = queryKey;

  return fetcher(`todos/${id}`);
};

export const editUser = ({ id, newTitle }: EditUserVariablesType): Promise<EditUserReturnType> => {
  return fetcher(`todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title: newTitle }),
  });
};
