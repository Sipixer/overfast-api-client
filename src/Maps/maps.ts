import { get } from "../utils/fetch";


type MapGamemode =
    | "assault"
    | "capture-the-flag"
    | "control"
    | "deathmatch"
    | "elimination"
    | "escort"
    | "flashpoint"
    | "hybrid"
    | "push"
    | "team-deathmatch";
type Map = {
    name: string;
    screenshot: string;
    gamemode: MapGamemode[];
    location: string;
    coutry_code?: string;
}

type GameMode = {
    key: string;
    name: string;
    description: string;
    icon: string;
    screenshot: string;
};

/**
 * Represents a class for interacting with maps.
 */
export class Maps {
    private url: string;

    /**
     * Creates an instance of the Maps class.
     * @param url - The base URL for the API.
     */
    constructor(url: string) {
        this.url = url;
    }

    /**
     * Retrieves a list of maps.
     * @param params - Optional parameters for filtering the maps.
     * @returns A promise that resolves to an array of maps.
     */
    async getMaps(params?: { gamemode?: MapGamemode }): Promise<Map[]> {
        return get<Map[]>(`${this.url}maps`, params);
    }

    /**
     * Retrieves a list of game modes.
     * @returns A promise that resolves to an array of game modes.
     */
    async getGamemodes(): Promise<GameMode[]> {
        return get<GameMode[]>(`${this.url}gamemodes`);
    }
}