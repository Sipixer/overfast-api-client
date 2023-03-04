export declare class ValidationError extends Error {
    title: string;
    detail: {
        loc: string[] | number[];
        msg: string;
        type: string;
    };
    constructor(detail: any);
}
