export class NotFound extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
    this.name = "NotFoundError";
  }
}

export class ServerError extends Error {
  constructor(message) {
    super(message);
    this.status = 500;
    this.name = "InternalServerError";
  }
}

export class Unauthorised extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
    this.name = "UnauthorisedError";
  }
}

export class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
    this.name = "UnauthorisedError";
  }
}
