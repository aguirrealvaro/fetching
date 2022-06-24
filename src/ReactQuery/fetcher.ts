const defaultOptions = {
  "Content-type": "application/json; charset=UTF-8",
  method: "GET",
};

export const fetcher = async (
  url: URL | RequestInfo,
  options: RequestInit = defaultOptions
): Promise<any> => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw { statusCode: response.status, originalError: data };
    }
  } catch (err) {
    throw { statusCode: 0, originalError: err };
  }
};
