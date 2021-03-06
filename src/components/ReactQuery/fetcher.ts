const defaultOptions = {
  method: "GET",
};

export const fetcher = async <T>(
  url: URL | RequestInfo,
  options: RequestInit = defaultOptions,
  baseURL = "https://jsonplaceholder.typicode.com"
): Promise<T> => {
  try {
    const response = await fetch(`${baseURL}/${url}`, options);
    const data: T = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw { statusCode: response.status, originalError: data };
    }
  } catch (err) {
    throw err;
  }
};
