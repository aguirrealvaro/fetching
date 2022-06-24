import React, { FunctionComponent, useEffect } from "react";
import { useQuery } from "react-query";
import { getDogs } from "./endpoints";

type DogsType = {
  message: Record<string, string[]>;
  success: boolean;
};

/* type DogType = {
  message: string[];
  success: boolean;
}; */

export const ReactQuery: FunctionComponent = () => {
  const { data: dogs } = useQuery<DogsType>("dogs", getDogs);

  /*  const {
    mutate: fetchSelectedDog,
    data: dog,
    isLoading: isLoadingDog,
  } = useMutation("dog", (dog: string) =>
    fetch(`https://dog.ceo/api/breed/${dog}/images`).then((res) => res.json())
  ); */

  /* const onSelectDog = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAnimal(event.target.value);
    //fetchSelectedDog(event.target.value);
  }; */

  /* return (
    <div>
      <select onChange={onSelectDog} role="combobox">
        <option>Select option</option>
        <option value="perro">perro</option>
        <option value="gato">gato</option>
      </select>
    </div>
  ); */

  console.log({ dogs });

  return <div>query</div>;
};
