"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroes = void 0;
const fetch_1 = require("../utils/fetch");
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
const heroes = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { role, locale } = params || {};
    const localeParam = locale ? `locale=${locale}&` : "";
    const roleParam = role ? `role=${role}` : "";
    const url = `https://overfast-api.tekrop.fr/heroes?${localeParam}${roleParam}`;
    const data = yield (0, fetch_1.get)(url);
    return data;
});
exports.heroes = heroes;
