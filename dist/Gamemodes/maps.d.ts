import { MapGamemode } from "../type";
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
export declare const maps: (params?: mapsParams) => Promise<maps>;
export {};
