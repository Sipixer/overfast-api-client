import { ValidationError as ValidationErr } from "./error/ValidationError";
import { InternalServerError as InternalServerErr } from "./error/InternalServerError";
import { BlizzardServerError as BlizzardServerErr } from "./error/BlizzardServerError";
import { hero } from "./hero/hero";
import { heroes } from "./hero/heroes";
import { roles } from "./hero/roles";
import { gamemodes } from "./Gamemodes/gamemodes";
import { maps } from "./Gamemodes/maps";
import { searchPlayers } from "./Players/searchPlayers";
import { player } from "./Players/player";

export const ValidationError = ValidationErr;
export const InternalServerError = InternalServerErr;
export const BlizzardServerError = BlizzardServerErr;

const OverwatchAPI = {
  heroes: heroes,
  hero: hero,
  roles: roles,
  gamemodes: gamemodes,
  maps: maps,
  searchPlayers: searchPlayers,
  player: player,
};

export default OverwatchAPI;
