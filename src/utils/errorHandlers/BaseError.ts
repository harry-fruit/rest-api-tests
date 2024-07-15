interface IBaseErrorParams {
    statusCode: number;
    message: string;
}

export class BaseError extends Error {
    statusCode: number;
    
    constructor({ statusCode, message }: IBaseErrorParams) {
        super(message);
        this.statusCode = statusCode;
    }
    
    getBody = () => {
        return {
            statusCode: this.statusCode,
            message: this.message,
        }
    }
    
};