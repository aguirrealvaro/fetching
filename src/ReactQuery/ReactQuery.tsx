import React, { FunctionComponent, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { getUsers, getUser, editUser } from "./endpoints";
import { fetcher } from "./fetcher";

type UserType = {
  userid: number;
  id: 1;
  title: string;
  completed: boolean;
};

export const ReactQuery: FunctionComponent = () => {
  const { data: users, isFetching: isFetchingUsers } = useQuery<UserType[]>("users", getUsers);

  const [selectedUser, setSelectedUser] = useState<string | undefined>(undefined);

  const {
    data: user,
    isFetching: isFetchingUser,
    refetch: getUserRequest,
  } = useQuery<UserType>(["user", selectedUser], getUser, {
    enabled: !!selectedUser,
  });

  const mutation = useMutation(editUser);

  const handleSelectUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(event.target.value);
  };

  const handleEditUser = () => {
    if (!selectedUser) return;
    mutation.mutate(selectedUser); // como pasarle un segundo parametro? tipar useMutation variables
  };

  //const queryClient = useQueryClient();

  const handleRefreshUser = () => {
    getUserRequest();

    // it is supposed we avoid refetching, we can get data from cache(not sure how):
    //queryClient.invalidateQueries("user");
    //queryClient.cancelQueries("user");
    //queryClient.getQueryData("user");
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
      {selectedUser && (
        <div>
          {isFetchingUser ? (
            <span>...</span>
          ) : (
            <div>
              <span>{user?.title}</span>
              <button onClick={handleEditUser}>Edit</button>
              <button onClick={handleRefreshUser}>Refetch user</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
