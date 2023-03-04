export class InternalServerError extends Error {
  title: string;
  error: string;
  constructor(error: string) {
    super("Internal Server Error");
    this.title = "Internal Server Error";
    this.error = error;
  }
}
