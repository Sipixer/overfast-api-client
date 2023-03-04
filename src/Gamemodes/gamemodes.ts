import { MapGamemode, locales } from "../type";
import { get } from "../utils/fetch";

type gamemodes = {
  key: MapGamemode;
  name: string;
  description: string;
  icon: string;
  screenshot: string;
}[];

type gamemodesParams = {
  locale?: locales;
} | null;

export const gamemodes = async (
  params?: gamemodesParams
): Promise<gamemodes> => {
  const { locale } = params || {};
  const localeParam = locale ? `locale=${locale}&` : "";
  const url = `https://overfast-api.tekrop.fr/gamemodes?${localeParam}`;
  const data: gamemodes = await get(url);
  return data;
};
