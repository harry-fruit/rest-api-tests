import { BaseError } from "./BaseError";

export class InternalServerError extends BaseError {
    constructor(message: string) {
        super({ statusCode: 500, message });
    }
}