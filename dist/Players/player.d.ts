export declare const player: (player_id: string) => {
    career: Promise<any>;
    summary: Promise<{
        username: string;
        avatar?: string | undefined;
        title?: string | undefined;
        endorsement: {
            level: number;
            frame: string;
        };
        competitive?: {
            pc?: {
                tank: {
                    division: "bronze" | "silver" | "gold" | "platinum" | "diamond" | "master" | "grandmaster";
                    tier: number;
                    role_icon: string;
                    rank_icon: string;
                };
                damage: {
                    division: "bronze" | "silver" | "gold" | "platinum" | "diamond" | "master" | "grandmaster";
                    tier: number;
                    role_icon: string;
                    rank_icon: string;
                };
                support: {
                    division: "bronze" | "silver" | "gold" | "platinum" | "diamond" | "master" | "grandmaster";
                    tier: number;
                    role_icon: string;
                    rank_icon: string;
                };
            } | undefined;
            console?: {
                tank: {
                    division: "bronze" | "silver" | "gold" | "platinum" | "diamond" | "master" | "grandmaster";
                    tier: number;
                    role_icon: string;
                    rank_icon: string;
                };
                damage: {
                    division: "bronze" | "silver" | "gold" | "platinum" | "diamond" | "master" | "grandmaster";
                    tier: number;
                    role_icon: string;
                    rank_icon: string;
                };
                support: {
                    division: "bronze" | "silver" | "gold" | "platinum" | "diamond" | "master" | "grandmaster";
                    tier: number;
                    role_icon: string;
                    rank_icon: string;
                };
            } | undefined;
        } | undefined;
        privacy: "public" | "private";
    }>;
};
