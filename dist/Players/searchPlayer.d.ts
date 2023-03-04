type Query = {
    name?: string;
    privacy?: string;
    order_by?: string;
    offset?: number;
    limit?: number;
};
type Player = {
    player_id: string;
    name: string;
    privacy: "public" | "private";
    career_url: string;
};
type Response = {
    total: number;
    results: Player[];
};
export declare const searchPlayer: (query?: Query) => Promise<Response>;
export {};
