import { MapGamemode, locales } from "../type";
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
export declare const gamemodes: (params?: gamemodesParams) => Promise<gamemodes>;
export {};
