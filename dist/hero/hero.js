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
exports.hero = void 0;
const fetch_1 = require("../utils/fetch");
/**
 * This function return a hero details from Overfast API by TeKrop.
 *
 * @param {HEROES_KEYS} hero_key The hero key.
 * @param {heroesParams} params Optional parameters.
 * @returns {Promise<HeroDetails>} Promise of a hero details.
 * @example
 * // Get hero details of Ana
 * const ana = await Overwatch.hero("ana");
 *
 * // Get hero details of Ana with locale "fr_FR"
 * const anaFr = await Overwatch.hero("ana", { locale: "fr_FR" });
 */
const hero = (hero_key, params) => __awaiter(void 0, void 0, void 0, function* () {
    const { locale } = params || {};
    const localeParam = locale ? `locale=${locale}` : "";
    const url = `https://overfast-api.tekrop.fr/heroes/${hero_key}?${localeParam}`;
    const data = yield (0, fetch_1.get)(url);
    return data;
});
exports.hero = hero;
