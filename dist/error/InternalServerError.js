"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
class InternalServerError extends Error {
    constructor(error) {
        super("Internal Server Error");
        this.title = "Internal Server Error";
        this.error = error;
    }
}
exports.InternalServerError = InternalServerError;
