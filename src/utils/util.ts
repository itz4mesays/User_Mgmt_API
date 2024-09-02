import { Response } from "express";

interface ResponseData {
    error: Boolean;
    message: string
    data?: object;
}

export const handleError = (res: Response, statusCode: number, error: unknown): Response => {
    let errorMessage = 'An unexpected error occurred';

    if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    }

    return res.status(statusCode).json({
        error: true,
        message: errorMessage
    } as ResponseData); //as keyword is used for type assertions
}

export const successResponse = (res: Response, statusCode: number, data: object, message: string): Response => {
    return res.status(statusCode).json({
        error: false,
        message,
        data
    } as ResponseData)
}