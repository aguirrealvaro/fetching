import React, { FunctionComponent, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { getUsers, getUser, editUser } from "./queryFns";

export const ReactQuery: FunctionComponent = () => {
  const usersQuery = useQuery("users", getUsers);

  const [selectedUser, setSelectedUser] = useState<string | undefined>(undefined);

  const userQuery = useQuery(["user", selectedUser], getUser, {
    enabled: !!selectedUser,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(editUser, {
    //updates after mutation invalidating the query
    onSuccess: () => queryClient.invalidateQueries("user"),

    // or do it manually
    // onSuccess: (editedUser) => queryClient.setQueryData(["user", selectedUser], editedUser),
  });

  const handleSelectUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(event.target.value);
  };

  const handleEditUser = () => {
    if (!selectedUser) return;
    mutation.mutate({ id: selectedUser, newTitle: "new title" });
  };

  const handleRefreshUser = () => {
    userQuery.refetch();
  };

  if (usersQuery.isFetching) return <div>...</div>;

  return (
    <div>
      <select onChange={handleSelectUser}>
        <option>Select option</option>
        {usersQuery.data?.map(({ id }) => {
          return (
            <option value={id} key={id}>
              {id}
            </option>
          );
        })}
      </select>
      {selectedUser && (
        <div>
          {userQuery.isFetching ? (
            <span>...</span>
          ) : (
            <div>
              <span>{userQuery.data?.title}</span>
              <button onClick={handleEditUser}>Edit</button>
              <button onClick={handleRefreshUser}>Refetch user</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
