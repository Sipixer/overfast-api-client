import { ValidationError as ValidationErr } from "./error/ValidationError";
import { InternalServerError as InternalServerErr } from "./error/InternalServerError";
import { BlizzardServerError as BlizzardServerErr } from "./error/BlizzardServerError";
export declare const ValidationError: typeof ValidationErr;
export declare const InternalServerError: typeof InternalServerErr;
export declare const BlizzardServerError: typeof BlizzardServerErr;
declare const OverwatchAPI: {
    heroes: (params?: ({
        role?: import("./type").Role | undefined;
        locale?: import("./type").locales | undefined;
    } | null) | undefined) => Promise<{
        key: import("./type").HEROES_KEYS;
        name: string;
        portrait: string;
        role: import("./type").Role;
    }[]>;
    hero: (hero_key: import("./type").HEROES_KEYS, params?: ({
        locale?: import("./type").locales | undefined;
    } | null) | undefined) => Promise<{
        name: string;
        description: string;
        portrait: string;
        role: import("./type").Role;
        location: string;
        abilities: import("./type").Ability[];
        story: {
            sumarry: string;
            media: {
                type: string;
                link: string;
            };
            chapters: {
                title: string;
                content: string;
                picture: string;
            }[];
        };
    }>;
    roles: (params?: ({
        locale?: import("./type").locales | undefined;
    } | null) | undefined) => Promise<{
        key: import("./type").Role;
        name: string;
        icon: string;
        description: string;
    }[]>;
    gamemodes: (params?: ({
        locale?: import("./type").locales | undefined;
    } | null) | undefined) => Promise<{
        key: import("./type").MapGamemode;
        name: string;
        description: string;
        icon: string;
        screenshot: string;
    }[]>;
    maps: (params?: ({
        gamemode?: import("./type").MapGamemode | undefined;
    } | null) | undefined) => Promise<{
        name: string;
        screenshot: string;
        gamemode: import("./type").MapGamemode[];
        location: string;
        coutry_code?: string | undefined;
    }[]>;
    searchPlayers: (query?: {
        name: string;
        privacy?: import("./type").Privacy | undefined;
        order_by?: string | undefined;
        offset?: number | undefined;
        limit?: number | undefined;
    } | undefined) => Promise<{
        total: number;
        results: {
            player_id: string;
            name: string;
            privacy: import("./type").Privacy;
            career_url: string;
        }[];
    }>;
    player: (player_id: string) => {
        summary: Promise<import("./type").PlayerSummary>;
        career: Promise<import("./type").PlayerCareer>;
    };
};
export default OverwatchAPI;
