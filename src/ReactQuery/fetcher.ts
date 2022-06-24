const defaultOptions = {
  "Content-type": "application/json; charset=UTF-8",
  method: "GET",
};

export const fetcher = async (
  url: URL | RequestInfo,
  options: RequestInit = defaultOptions
): Promise<any> => {
  const resp = await fetch(url, options);
  const data = await resp.json();
  return data;
};
