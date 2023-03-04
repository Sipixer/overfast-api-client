export class ValidationError extends Error {
  title: string;
  detail: {
    loc: string[] | number[];
    msg: string;
    type: string;
  };
  constructor(detail: any) {
    super("Validation Error"); // On appelle le constructeur de la classe parente
    this.title = "Validation Error"; // On définit le titre de l'erreur
    this.detail = detail; // On stocke les données supplémentaires
  }
}
