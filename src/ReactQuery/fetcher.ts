const defaultOptions = {
  "Content-type": "application/json; charset=UTF-8",
  method: "GET",
};

export const fetcher = async <T>(
  url: URL | RequestInfo,
  options: RequestInit = defaultOptions
): Promise<T> => {
  try {
    const response = await fetch(url, options);
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
