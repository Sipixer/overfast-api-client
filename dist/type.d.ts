export type Role = "tank" | "damage" | "support";
export type HEROES_KEYS = "ana" | "ashe" | "baptiste" | "bastion" | "brigitte" | "cassidy" | "dva" | "doomfist" | "echo" | "genji" | "hanzo" | "junker-queen" | "junkrat" | "kiriko" | "lucio" | "mei" | "mercy" | "moira" | "orisa" | "pharah" | "ramattra" | "reaper" | "reinhardt" | "roadhog" | "sigma" | "sojourn" | "soldier-76" | "sombra" | "symmetra" | "torbjorn" | "tracer" | "widowmaker" | "winston" | "wrecking-ball" | "zarya" | "zenyatta";
export type locales = "de-de" | "en-gb" | "en-us" | "es-es" | "es-mx" | "fr-fr" | "it-it" | "ja-jp" | "ko-kr" | "pl-pl" | "pt-br" | "ru-ru" | "zh-tw";
export type Ability = {
    name: string;
    description: string;
    icon: string;
};
export type MapGamemode = "assault" | "capture-the-flag" | "control" | "deathmatch" | "elimination" | "escort" | "hybrid" | "push" | "team-deathmatch";
type CompetitiveDivision = "bronze" | "silver" | "gold" | "platinum" | "diamond" | "master" | "grandmaster";
export type Privacy = "public" | "private";
type RoleIconUri = string;
type RankIconUri = string;
type PlayerEndorsement = {
    level: number;
    frame: string;
};
type PlatformCompetitiveRank = {
    pc?: CompetitiveRank;
    console?: CompetitiveRank;
};
type RoleDetails = {
    division: CompetitiveDivision;
    tier: number;
    role_icon: RoleIconUri;
    rank_icon: RankIconUri;
};
type CompetitiveRank = {
    tank: RoleDetails;
    damage: RoleDetails;
    support: RoleDetails;
};
type PlayerCareerStats = {
    pc?: PlayerCareerStatsPlatform;
    console?: PlayerCareerStatsPlatform;
};
type PlayerCareerStatsPlatform = {
    quickplay?: PlayerCareerStatsGamemode;
    competitive?: PlayerCareerStatsGamemode;
};
type PlayerCareerStatsGamemode = {
    heroes_comparisons: {
        time_played: PlayerCareerValueStat;
        games_won: PlayerCareerValueStat;
        weapon_accuracy: PlayerCareerValueStat;
        win_percentage: PlayerCareerValueStat;
        eliminations_per_life: PlayerCareerValueStat;
        critical_hit_accuracy: PlayerCareerValueStat;
        multikill_best: PlayerCareerValueStat;
        objective_kills: PlayerCareerValueStat;
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
    username: string;
    avatar?: string;
    title?: string;
    endorsement: PlayerEndorsement;
    competitive?: PlatformCompetitiveRank;
    privacy: Privacy;
};
export type PlayerCareer = {
    summary: PlayerSummary;
    stats?: PlayerCareerStats;
};
export {};
