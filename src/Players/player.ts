import { NEW_HEROES_KEYS } from "..";
import { PlayerCareer, PlayerSummary } from "../type";
import { get } from "../utils/fetch";


type StatisticsCategory = {
    assists: Record<string, number> | null;
    average: Record<string, number> | null;
    best: Record<string, number> | null;
    combat: Record<string, number> | null;
    game: Record<string, number> | null;
    hero_specific: Record<string, number> | null;
    match_awards: Record<string, number> | null;
    miscellaneous: Record<string, number> | null;
}

type CarrerProfile<T extends string | number | symbol> = {
    [K in T]: StatisticsCategory;
};

/**
 * Represents a player in the game.
 * @template T - The type of hero.
 */
export class Player<T extends string | number | symbol> {
    player_id;
    private api_url;

    /**
     * Creates a new instance of the Player class.
     * @param api_url - The API URL.
     * @param player_id - The player ID.
     */
    constructor(api_url: string, player_id: string) {
        this.api_url = api_url;
        this.player_id = player_id;
    }

    /**
     * Retrieves the summary of the player.
     * @returns A promise that resolves to the player summary.
     */
    async summary() {
        return get<PlayerSummary>(`${this.api_url}players/${this.player_id}/summary`);
    }

    /**
     * Retrieves the career stats of the player.
     * Filter on a specific gamemode in order to only get the statistics for this gamemode. If not specified, the competitive stats will be displayed by default.
     * Filter on a specific hero in order to only get his statistics. You also can specify 'all-heroes' for general stats.
     * Filter on a specific platform. If not specified, the only platform the player played on will be selected. If the player has already played on both PC and console, the PC stats will be displayed by default.
     * @param params - The parameters for the career stats request.
     * @returns A promise that resolves to the player career stats.
     */
    async career<M extends NEW_HEROES_KEYS<T | "all-heroes">>(params?: {
        platform?: "pc" | "console",
        gamemode?: "quickplay" | "competitive",
        hero?: M,
    }) {
        const param = {
            gamemode: "competitive",
            hero: "all-heroes",
            ...params
        }
        return get<CarrerProfile<M extends string ? M : "all-heroes">>(`${this.api_url}players/${this.player_id}/stats/career`, param as Record<string, string>);
    }
}