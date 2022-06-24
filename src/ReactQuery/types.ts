export type UserType = {
  userid: number;
  id: 1;
  title: string;
  completed: boolean;
};

export type GetUserQueryKeyType = [string, string | undefined];

export type EditUserVariablesType = { id: string; newTitle: string };

export type EditUserReturnType = { id: number };
