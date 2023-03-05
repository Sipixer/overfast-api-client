import { Privacy } from "../type";
type Query = {
    name: string;
    privacy?: Privacy;
    order_by?: string;
    offset?: number;
    limit?: number;
};
type Player = {
    player_id: string;
    name: string;
    privacy: Privacy;
    career_url: string;
};
type Response = {
    total: number;
    results: Player[];
};
export declare const searchPlayers: (query?: Query) => Promise<Response>;
export {};
