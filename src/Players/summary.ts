import { PlayerSummary } from "../type";
import { get } from "../utils/fetch";

export const summary = async (player_id: string): Promise<PlayerSummary> => {
  const url = `https://overfast-api.tekrop.fr/players/${player_id}/summary`;
  const data: PlayerSummary = await get(url);
  return data;
};
