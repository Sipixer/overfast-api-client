"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlizzardServerError = void 0;
class BlizzardServerError extends Error {
    constructor(error) {
        super("Blizzard Server Error");
        this.title = "Blizzard Server Error";
        this.error = error;
    }
}
exports.BlizzardServerError = BlizzardServerError;
