/* eslint-disable */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const REQUEST_TIMEOUT = 13000; // = 13 seconds
const NETWORK_ERROR = { status: 0, message: 'Network request failed' };
const defaultStatuses: { [key: number]: string } = {
  404: 'Page Not Found',
  500: 'Internal Server Error',
};

export const parseResult = async (response: Response) => {
  let result;
  try {
    result = await response.json();
  } catch (e) {
    const { status } = response;
    const error: { status: number; message?: string } = { status };
    error.message = defaultStatuses[status] || 'Unknown Error';
    throw error;
  }

  if (!response.ok) {
    const error = { ...result };
    error.status = response.status;
    throw error;
  }

  return result;
};

let token: string | undefined;

class API {
  setToken = (value: string) => {
    token = value;
  };

  fetch = async ({
    method,
    route,
    body,
  }: {
    method: 'GET' | 'PUT' | 'POST' | 'DELETE';
    route: string;
    body?: Record<string, any>;
  }): Promise<any> => {
    const headers: Record<string, string> = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const request: Record<string, any> = {
      method,
      headers,
    };

    if (body) {
      request.body = JSON.stringify(body);
    }

    return Promise.race([
      fetch(BASE_URL + route, request).catch(() => {
        throw NETWORK_ERROR;
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(NETWORK_ERROR), REQUEST_TIMEOUT),
      ),
    ]);
  };

  get = (route: string): Promise<any> =>
    this.fetch({ method: 'GET', route }).then(parseResult);

  post = (route: string, body: Record<string, any>): Promise<any> =>
    this.fetch({ method: 'POST', route, body }).then(parseResult);

  put = (route: string, body: Record<string, any>): Promise<any> =>
    this.fetch({ method: 'PUT', route, body }).then(parseResult);

  delete = (route: string, body?: Record<string, any>): Promise<any> =>
    this.fetch({ method: 'DELETE', route, body }).then(parseResult);
}

export default API;
