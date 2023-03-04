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
exports.roles = void 0;
const fetch_1 = require("../utils/fetch");
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
const roles = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { locale } = params || {};
    const localeParam = locale ? `locale=${locale}&` : "";
    const url = `https://overfast-api.tekrop.fr/roles?${localeParam}`;
    const data = yield (0, fetch_1.get)(url);
    return data;
});
exports.roles = roles;
