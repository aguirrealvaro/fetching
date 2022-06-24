/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { QueryFunctionContext } from "react-query";
import { fetcher } from "./fetcher";

export const getDogs = () => {
  return fetcher("https://dog.ceo/api/breeds/list/all");
};

export const getDog = ({ queryKey }: QueryFunctionContext) => {
  const [_, dog] = queryKey;

  return fetcher(`https://dog.ceo/api/breed/${dog}/images`);
};
