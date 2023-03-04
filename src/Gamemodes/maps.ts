import { MapGamemode } from "../type";
import { get } from "../utils/fetch";

type maps = {
  name: string;
  screenshot: string;
  gamemode: MapGamemode[];
  location: string;
  coutry_code?: string;
}[];

type mapsParams = {
  gamemode?: MapGamemode;
} | null;

export const maps = async (params?: mapsParams): Promise<maps> => {
  const { gamemode } = params || {};
  const gamemodeParam = gamemode ? `gamemode=${gamemode}&` : "";
  const url = `https://overfast-api.tekrop.fr/maps?${gamemodeParam}`;
  const data: maps = await get(url);
  return data;
};
