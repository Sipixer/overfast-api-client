type CompetitiveDivision = "bronze" | "silver" | "gold" | "platinum" | "diamond" | "master" | "grandmaster";
type Privacy = "public" | "private";
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
type Player = {
    username: string;
    avatar?: string;
    title?: string;
    endorsement: PlayerEndorsement;
    competitive?: PlatformCompetitiveRank;
    privacy: Privacy;
};
export declare const summary: (player_id: string) => Promise<Player>;
export {};
