"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.player = void 0;
const career_1 = require("./career");
const summary_1 = require("./summary");
const player = (player_id) => {
    player_id = player_id.replace("#", "-");
    return {
        summary: (0, summary_1.summary)(player_id),
        career: (0, career_1.career)(player_id),
    };
};
exports.player = player;
