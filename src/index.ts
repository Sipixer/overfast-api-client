import { ValidationError as ValidationErr } from "./error/ValidationError";
import { InternalServerError as InternalServerErr } from "./error/InternalServerError";
import { BlizzardServerError as BlizzardServerErr } from "./error/BlizzardServerError";
import { HEROES_KEYS, locales } from "./type";
import { Heroes } from "./hero/heroes";
import { Maps } from "./Maps/maps";
import { Players } from "./Players/players";

export const ValidationError = ValidationErr;
export const InternalServerError = InternalServerErr;
export const BlizzardServerError = BlizzardServerErr;
export type NEW_HEROES_KEYS<T extends string | number | symbol> = T extends HEROES_KEYS ? HEROES_KEYS : T | HEROES_KEYS;


export default class OverfastClient<HEROES extends string | number | symbol = HEROES_KEYS> {
  url;
  locale;

  heroes;
  maps;
  players;

  constructor({ url = "https://overfast-api.tekrop.fr/", locale = "en-us" }: {
    url?: string,
    locale?: locales
  } | undefined = {}) {
    this.url = url;
    this.locale = locale;
    this.heroes = new Heroes<NEW_HEROES_KEYS<HEROES>>(url, locale);
    this.maps = new Maps(url);
    this.players = new Players<NEW_HEROES_KEYS<HEROES>>(url);
  }
}
