import { get } from "../utils/fetch";
import { Player } from "./player";

/**
 * Represents the response object returned by the API when retrieving a list of players.
 */
type Response = {
    total: number; // Total number of results
    results: {
        player_id: string; // Player unique name. Identifier of the player : BattleTag (with "#" replaced by "-")
        name: string; // Player nickname displayed in the game
        avatar?: string; // URL of the player's avatar. Can be null if couldn't retrieve any
        namecard?: string; // URL of the player's namecard (or banner) if any
        title?: string; // Title of the player if any
        career_url: string; // Player's career OverFast API URL (Get player career data)
        blizzard_id: string; // Blizzard unique identifier of the player (hexadecimal)
    }[]; // List of players found
};


/**
 * Represents a collection of players.
 * @template T - The type of the player identifier.
 */
export class Players<T extends string | number | symbol> {
    private url;
    constructor(url: string) {
        this.url = url;
    }

    /**
     * Search for players based on the specified parameters.
     * @param params - The search parameters.
     * @returns A promise that resolves to the response containing the search results.
     */
    async searchPlayers(params: {
        name: string,
        order_by?: `${"player_id" | 'name'}:${"asc" | "desc"}`,
        offset?: number,
        limit?: number
    }): Promise<Response> {
        return get<Response>(`${this.url}players`, params);
    }

    /**
     * Get a specific player by their identifier.
     * @param player_id - The identifier of the player.
     * @returns An instance of the Player class representing the player.
     */
    player(player_id: string) {
        return new Player<T>(this.url, player_id.replace("#", "-"));
    }
}