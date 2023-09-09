const BASE_URL = 'https://api.api-ninjas.com/v1';

type RequestMethod = 'GET' | 'POST';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  options.headers = {
    'X-Api-Key': 'iXHDtK+qYgF60C1TzwOyFw==bSIv8oEWAq2yNbTj',
  };

  if (data) {
    options.body = data;
  }

  console.log(options);

  return fetch(BASE_URL + url, options).then((response) => {
    console.log(response)
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.message);
      });
    }

    return response.json();
  });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data?: any) => request<T>(url, 'POST', data),
};