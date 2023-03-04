export class BlizzardServerError extends Error {
  title: string;
  error: string;
  constructor(error: string) {
    super("Blizzard Server Error");
    this.title = "Blizzard Server Error";
    this.error = error;
  }
}
