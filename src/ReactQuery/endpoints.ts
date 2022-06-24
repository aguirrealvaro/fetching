import { fetcher } from "./fetcher";

export const getDogs = (): Promise<any> => {
  return fetcher("https://dog.ceo/api/breeds/list/all");
};
