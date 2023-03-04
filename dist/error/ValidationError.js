"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
class ValidationError extends Error {
    constructor(detail) {
        super("Validation Error"); // On appelle le constructeur de la classe parente
        this.title = "Validation Error"; // On définit le titre de l'erreur
        this.detail = detail; // On stocke les données supplémentaires
    }
}
exports.ValidationError = ValidationError;
