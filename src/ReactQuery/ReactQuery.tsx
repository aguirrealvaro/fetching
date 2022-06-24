import React, { FunctionComponent, useState } from "react";
import { useQuery } from "react-query";
import { getUsers, getUser } from "./endpoints";

type UserType = {
  userid: number;
  id: 1;
  title: string;
  completed: boolean;
};

export const ReactQuery: FunctionComponent = () => {
  const { data: users, isFetching: isFetchingUsers } = useQuery<UserType[]>("users", getUsers);

  const [selectedUser, setSelectedUser] = useState<string | undefined>(undefined);

  const { data: user, isFetching: isFetchingUser } = useQuery<UserType>(["user", selectedUser], getUser, {
    enabled: !!selectedUser,
  });

  const handleSelectUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(event.target.value);
  };

  if (isFetchingUsers) return <div>...</div>;

  return (
    <div>
      <select onChange={handleSelectUser}>
        <option>Select option</option>
        {users &&
          users.map(({ id }) => {
            return (
              <option value={id} key={id}>
                {id}
              </option>
            );
          })}
      </select>
      <div>{isFetchingUser ? <span>...</span> : user?.title}</div>
    </div>
  );
};
