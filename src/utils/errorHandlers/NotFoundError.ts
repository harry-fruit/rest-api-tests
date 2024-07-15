import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError {
    constructor(message: string) {
        super({ statusCode: 404, message });
    }
}