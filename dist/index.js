"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlizzardServerError = exports.InternalServerError = exports.ValidationError = void 0;
const ValidationError_1 = require("./error/ValidationError");
const InternalServerError_1 = require("./error/InternalServerError");
const BlizzardServerError_1 = require("./error/BlizzardServerError");
const hero_1 = require("./hero/hero");
const heroes_1 = require("./hero/heroes");
const roles_1 = require("./hero/roles");
const gamemodes_1 = require("./Gamemodes/gamemodes");
const maps_1 = require("./Gamemodes/maps");
const searchPlayers_1 = require("./Players/searchPlayers");
const player_1 = require("./Players/player");
exports.ValidationError = ValidationError_1.ValidationError;
exports.InternalServerError = InternalServerError_1.InternalServerError;
exports.BlizzardServerError = BlizzardServerError_1.BlizzardServerError;
const OverwatchAPI = {
    heroes: heroes_1.heroes,
    hero: hero_1.hero,
    roles: roles_1.roles,
    gamemodes: gamemodes_1.gamemodes,
    maps: maps_1.maps,
    searchPlayers: searchPlayers_1.searchPlayers,
    player: player_1.player,
};
exports.default = OverwatchAPI;
