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
exports.maps = void 0;
const fetch_1 = require("../utils/fetch");
const maps = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { gamemode } = params || {};
    const gamemodeParam = gamemode ? `gamemode=${gamemode}&` : "";
    const url = `https://overfast-api.tekrop.fr/maps?${gamemodeParam}`;
    const data = yield (0, fetch_1.get)(url);
    return data;
});
exports.maps = maps;
