import React, { FunctionComponent, useState } from "react";
import { useQuery } from "react-query";
import { getDogs, getDog } from "./endpoints";

type DogsType = {
  message: Record<string, string[]>;
  success: boolean;
};

type DogType = {
  message: string[];
  success: boolean;
};

export const ReactQuery: FunctionComponent = () => {
  const { data: dogs, isFetching: isFetchingDogs } = useQuery<DogsType>("dogs", getDogs);

  const [selectedDog, setSelectedDog] = useState<string | undefined>(undefined);

  const { data: dog, isFetching: isFetchingDog } = useQuery<DogType>(["dog", selectedDog], getDog, {
    enabled: !!selectedDog,
  });

  const onSelectDog = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDog(event.target.value);
  };

  if (isFetchingDogs) return <div>...</div>;

  return (
    <div>
      <select onChange={onSelectDog}>
        <option>Select option</option>
        {dogs &&
          Object.keys(dogs.message).map((dog) => {
            return (
              <option value={dog} key={dog}>
                {dog}
              </option>
            );
          })}
        <option value="gato">gato</option>
      </select>
      <div>{isFetchingDog ? <span>...</span> : <img src={dog?.message[0]} />}</div>
    </div>
  );
};
