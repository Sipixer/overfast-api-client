import { ValidationError, InternalServerError } from "..";
import { BlizzardServerError } from "../error/BlizzardServerError";

export const get = async (url: string): Promise<any> => {
  const response = await fetch(url);
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
