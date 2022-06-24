const defaultOptions = { method: "GET" };

export const client = async (url: string, options: RequestInit = defaultOptions): Promise<any> => {
  const resp = await fetch(url, options);
  const data = await resp.json();
  return data;
};
