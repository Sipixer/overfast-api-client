"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const __1 = require("..");
const BlizzardServerError_1 = require("../error/BlizzardServerError");
const get = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    if (response.status === 422) {
        const data = yield response.json();
        throw new __1.ValidationError(data.detail);
    }
    if (response.status === 500) {
        const data = yield response.json();
        throw new __1.InternalServerError(data.error);
    }
    if (response.status === 504) {
        const data = yield response.json();
        throw new BlizzardServerError_1.BlizzardServerError(data.error);
    }
    if (response.status === 404) {
        try {
            const data = yield response.json();
            if (data.error)
                throw new Error(data.error);
        }
        catch (error) {
            throw error;
        }
    }
    if (!response.ok)
        throw new Error(response.statusText);
    return response.json();
});
exports.get = get;
