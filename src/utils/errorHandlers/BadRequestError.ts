import { BaseError } from "./BaseError";

export class BadRequestError extends BaseError {
    constructor(message: string) {
        super({ statusCode: 400, message });
    }
}