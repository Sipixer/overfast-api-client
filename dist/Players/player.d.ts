export declare const player: (player_id: string) => {
    summary: Promise<import("../type").PlayerSummary>;
    career: Promise<import("../type").PlayerCareer>;
};
