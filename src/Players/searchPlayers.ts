import { Privacy } from "../type";
import { get } from "../utils/fetch";

type Query = {
  name: string; // Example: name=TeKrop
  privacy?: Privacy; // Example: privacy=public
  order_by?: string; // Ordering field and the way it's arranged (asc[ending]/desc[ending]) ^(player_id|name|privacy):(asc|desc)$ Default: "name:asc"
  offset?: number; // Offset of the results >= 0 Default: 0
  limit?: number; // Limit of results per page > 0 Default: 20
};

type Player = {
  player_id: string; // Player unique name. Identifier of the player : BattleTag (with "#" replaced by "-")
  name: string; // Player nickname displayed in the game
  privacy: Privacy; // Privacy of the player career. If private, only some basic informations are available on player details endpoint (avatar, endorsement)
  career_url: string; // Player's career OverFast API URL (Get player career data) [ 1 .. 65536 ] characters
};

type Response = {
  total: number; // Total number of results >= 0
  results: Player[]; // List of players found
};

export const searchPlayers = async (query?: Query): Promise<Response> => {
  const { name, privacy, order_by, offset, limit } = query || {};
  const nameParam = name ? `name=${name}&` : "";
  const privacyParam = privacy ? `privacy=${privacy}&` : "";
  const orderByParam = order_by ? `order_by=${order_by}&` : "";
  const offsetParam = offset ? `offset=${offset}&` : "";
  const limitParam = limit ? `limit=${limit}&` : "";
  const url = `https://overfast-api.tekrop.fr/players?${nameParam}${privacyParam}${orderByParam}${offsetParam}${limitParam}`;
  const data: Response = await get(url);
  return data;
};
