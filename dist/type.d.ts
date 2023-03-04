export type Role = "tank" | "damage" | "support";
export type HEROES_KEYS = "ana" | "ashe" | "baptiste" | "bastion" | "brigitte" | "cassidy" | "dva" | "doomfist" | "echo" | "genji" | "hanzo" | "junker-queen" | "junkrat" | "kiriko" | "lucio" | "mei" | "mercy" | "moira" | "orisa" | "pharah" | "ramattra" | "reaper" | "reinhardt" | "roadhog" | "sigma" | "sojourn" | "soldier-76" | "sombra" | "symmetra" | "torbjorn" | "tracer" | "widowmaker" | "winston" | "wrecking-ball" | "zarya" | "zenyatta";
export type locales = "de-de" | "en-gb" | "en-us" | "es-es" | "es-mx" | "fr-fr" | "it-it" | "ja-jp" | "ko-kr" | "pl-pl" | "pt-br" | "ru-ru" | "zh-tw";
export type Ability = {
    name: string;
    description: string;
    icon: string;
};
export type MapGamemode = "assault" | "capture-the-flag" | "control" | "deathmatch" | "elimination" | "escort" | "hybrid" | "push" | "team-deathmatch";
