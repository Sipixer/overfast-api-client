import { ValidationError, InternalServerError } from "..";
import { BlizzardServerError } from "../error/BlizzardServerError";


/**
 * Performs a GET request to the specified URL with optional query parameters and returns the retrieved data.
 * 
 * @param url The URL to query.
 * @param params Optional query parameters to append to the URL.
 * @returns A promise containing the retrieved data.
 * @template T The expected type of the retrieved data.
 */
export const get = async <T>(url: string, params?: Record<string, string | number>): Promise<T> => {
  // Construct URL with query parameters if provided
  let fullUrl = url;
  if (params) {
    const stringParams: Record<string, string> = {};
    for (const key in params) {
      stringParams[key] = params[key] as string;
    }

    const queryString = new URLSearchParams(stringParams).toString();
    if (queryString) {
      fullUrl += `?${queryString}`;
    }
  }
  const response = await fetch(fullUrl);
  if (response.status === 422) {
    const data = await response.json();
    throw new ValidationError(data.detail);
  }
  if (response.status === 500) {
    const data = await response.json();
    throw new InternalServerError(data.error);
  }
  if (response.status === 504) {
    const data = await response.json();
    throw new BlizzardServerError(data.error);
  }
  if (response.status === 404) {
    try {
      const data = await response.json();
      if (data.error) throw new Error(data.error);
    } catch (error) {
      throw error;
    }
  }
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
};
