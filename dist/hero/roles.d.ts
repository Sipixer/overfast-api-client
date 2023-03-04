import { Role, locales } from "../type";
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
export declare const roles: (params?: RolesParams) => Promise<Roles>;
export {};
