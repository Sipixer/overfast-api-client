export type Role = "tank" | "damage" | "support";
export type HEROES_KEYS =
  | "ana"
  | "ashe"
  | "baptiste"
  | "bastion"
  | "brigitte"
  | "cassidy"
  | "dva"
  | "doomfist"
  | "echo"
  | "genji"
  | "hanzo"
  | "junker-queen"
  | "junkrat"
  | "kiriko"
  | "lucio"
  | "mei"
  | "mercy"
  | "moira"
  | "orisa"
  | "pharah"
  | "ramattra"
  | "reaper"
  | "reinhardt"
  | "roadhog"
  | "sigma"
  | "sojourn"
  | "soldier-76"
  | "sombra"
  | "symmetra"
  | "torbjorn"
  | "tracer"
  | "widowmaker"
  | "winston"
  | "wrecking-ball"
  | "zarya"
  | "zenyatta";

export type locales =
  | "de-de"
  | "en-gb"
  | "en-us"
  | "es-es"
  | "es-mx"
  | "fr-fr"
  | "it-it"
  | "ja-jp"
  | "ko-kr"
  | "pl-pl"
  | "pt-br"
  | "ru-ru"
  | "zh-tw";


type PlayerEndorsement = {
  level: number; //Player Endorsement level. 0 if no information found. 1 to 5 otherwise.
  frame: string; //URL of the endorsement frame corresponding to the level
};

type PlatformCompetitiveRank = {
  pc?: CompetitiveRank; //Competitive rank on PC
  console?: CompetitiveRank; //Competitive rank on console
};

type RoleDetails = {
  division: string; //Division of the rank
  tier: number; //Tier inside the division, lower is better (1 to 5)
  role_icon: string; //URL the role icon
  rank_icon: string; //URL of the division icon associated with the player rank
  tier_icon: string; //URL of the tier icon associated with the player rank
};

type CompetitiveRank = {
  season: string; //Last competitive season played by the player. Can be 0 on Blizzard data for some reason, but can't explain what it means.
  tank: RoleDetails; //Tank role details
  damage: RoleDetails; //Damage role details
  support: RoleDetails; //Support role details
  open: RoleDetails; //Open Queue role details
};

type PlayerCareerStats = {
  pc?: PlayerCareerStatsPlatform; //Stats on PC
  console?: PlayerCareerStatsPlatform; //Stats on console
};

type PlayerCareerStatsPlatform = {
  quickplay?: PlayerCareerStatsGamemode; //Stats in quickplay
  competitive?: PlayerCareerStatsGamemode; //Stats in competitive
};

type PlayerCareerStatsGamemode = {
  heroes_comparisons: {
    time_played: PlayerCareerValueStat; //Time played on each hero
    games_won: PlayerCareerValueStat; //Games won on each hero
    weapon_accuracy: PlayerCareerValueStat; //Weapon accuracy on each hero
    win_percentage: PlayerCareerValueStat; //Win percentage on each hero
    eliminations_per_life: PlayerCareerValueStat; //Eliminations per life on each hero
    critical_hit_accuracy: PlayerCareerValueStat; //Critical hit accuracy on each hero
    multikill_best: PlayerCareerValueStat; //Best multikill on each hero
    objective_kills: PlayerCareerValueStat; //Objective kills on each hero
  };
  career_stats: any;
};

type PlayerCareerValueStat = {
  label: string;
  values: {
    hero: HEROES_KEYS;
    value: number;
  }[];
};

export type PlayerSummary = {
  username: string; //Username of the player
  avatar?: string; //URL of the avatar of the player
  namecard?: string; //URL of the player's namecard (or banner) if any
  title?: string; //Title of the player
  endorsement: PlayerEndorsement; //Endorsement of the player
  competitive?: PlatformCompetitiveRank; //Competitive rank of the player
};

export type PlayerCareer = {
  summary: PlayerSummary; //Summary of the player
  stats?: PlayerCareerStats; //Stats of the player
};
