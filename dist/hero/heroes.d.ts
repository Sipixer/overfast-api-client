import { HEROES_KEYS, Role, locales } from "../type";
type Hero = {
    key: HEROES_KEYS;
    name: string;
    portrait: string;
    role: Role;
};
type heroesParams = {
    role?: Role;
    locale?: locales;
} | null;
/**
 * This function returns an array of heroes from Overfast API by TeKrop.
 *
 * @param {heroesParams} params Optional parameters.
 * @returns {Promise<Hero[]>} Promise of an array of heroes.
 * @example
 * // Get all heroes
 * const allHeroes = await Overwatch.heroes();
 *
 * // Get all heroes with role "Tank" and locale "fr_FR"
 * const tankHeroesFr = await Overwatch.heroes({ role: "Tank", locale: "fr_FR" });
 */
export declare const heroes: (params?: heroesParams) => Promise<Hero[]>;
export {};
