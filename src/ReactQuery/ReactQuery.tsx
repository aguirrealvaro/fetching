import React, { FunctionComponent, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { getUsers, getUser, editUser } from "./endpoints";

export const ReactQuery: FunctionComponent = () => {
  const { data: users, isFetching: isFetchingUsers } = useQuery("users", getUsers, {
    onSuccess: () => console.log("on success get users"),
  });

  const [selectedUser, setSelectedUser] = useState<string | undefined>(undefined);

  const {
    data: user,
    isFetching: isFetchingUser,
    refetch: getUserRequest,
  } = useQuery(["user", selectedUser], getUser, {
    enabled: !!selectedUser,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(editUser, {
    onSuccess: () => queryClient.invalidateQueries("user"), // refetch users onSuccess Mutation
  });

  const handleSelectUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(event.target.value);
  };

  const handleEditUser = () => {
    if (!selectedUser) return;
    mutation.mutate({ id: selectedUser, newTitle: "new title" });
  };

  const handleRefreshUser = () => {
    getUserRequest();
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
