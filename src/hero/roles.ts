import { BlizzardServerError } from "../error/BlizzardServerError";
import { InternalServerError } from "../error/InternalServerError";
import { ValidationError } from "../error/ValidationError";
import { HEROES_KEYS, Role, locales } from "../type";
import { get } from "../utils/fetch";

type Roles = {
  key: Role;
  name: string;
  icon: string;
  description: string;
}[];
type RolesParams = {
  locale?: locales;
} | null;

/**
 * This function return an array of roles from Overfast API by TeKrop.
 *
 * @param {RolesParams} params Optional parameters.
 * @returns {Promise<Roles>} Promise of an array of roles.
 * @example
 * // Get all roles
 * const allRoles = await Overwatch.roles();
 *
 * // Get all roles with locale "fr_FR"
 * const allRolesFr = await Overwatch.roles({ locale: "fr_FR" });
 */
export const roles = async (params?: RolesParams): Promise<Roles> => {
  const { locale } = params || {};
  const localeParam = locale ? `locale=${locale}&` : "";
  const url = `https://overfast-api.tekrop.fr/roles?${localeParam}`;
  const data: Roles = await get(url);
  return data;
};
