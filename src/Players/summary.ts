import { get } from "../utils/fetch";

type CompetitiveDivision =
  | "bronze"
  | "silver"
  | "gold"
  | "platinum"
  | "diamond"
  | "master"
  | "grandmaster";
type Privacy = "public" | "private";
type RoleIconUri = string;
type RankIconUri = string;

type PlayerEndorsement = {
  level: number; //Player Endorsement level. 0 if no information found. 1 to 5 otherwise.
  frame: string; //URL of the endorsement frame corresponding to the level
};

type PlatformCompetitiveRank = {
  pc?: CompetitiveRank; //Competitive rank on PC
  console?: CompetitiveRank; //Competitive rank on console
};

type RoleDetails = {
  division: CompetitiveDivision; //Division of the rank (bronze, silver, gold, platinum, diamond, master, grandmaster)
  tier: number; //Tier inside the division, lower is better (1 to 5)
  role_icon: RoleIconUri; //URL the role icon
  rank_icon: RankIconUri; //URL of the rank icon associated with the player rank (division + tier)
};

type CompetitiveRank = {
  tank: RoleDetails; //Details about the tank rank
  damage: RoleDetails; //Details about the damage rank
  support: RoleDetails; //Details about the support rank
};

type Player = {
  username: string; //Username of the player
  avatar?: string; //URL of the avatar of the player
  title?: string; //Title of the player
  endorsement: PlayerEndorsement; //Endorsement of the player
  competitive?: PlatformCompetitiveRank; //Competitive rank of the player
  privacy: Privacy; //Privacy of the player
};

export const summary = async (player_id: string): Promise<Player> => {
  const url = `https://overfast-api.tekrop.fr/players/${player_id}/summary`;
  const data: Player = await get(url);
  return data;
};
