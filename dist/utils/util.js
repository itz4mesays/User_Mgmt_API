"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = exports.handleError = void 0;
const handleError = (res, statusCode, error) => {
    let errorMessage = 'An unexpected error occurred';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    else if (typeof error === 'string') {
        errorMessage = error;
    }
    return res.status(statusCode).json({
        error: true,
        message: errorMessage
    }); //as keyword is used for type assertions
};
exports.handleError = handleError;
const successResponse = (res, statusCode, data, message) => {
    return res.status(statusCode).json({
        error: false,
        message,
        data
    });
};
exports.successResponse = successResponse;
//# sourceMappingURL=util.js.map