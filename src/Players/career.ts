import { PlayerCareer } from "../type";
import { get } from "../utils/fetch";

export const career = async (player_id: string) => {
  const url = `https://overfast-api.tekrop.fr/players/${player_id}`;
  const data: PlayerCareer = await get(url);
  return data;
};
