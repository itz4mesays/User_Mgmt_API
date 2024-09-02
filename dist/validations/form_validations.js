"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const joi_1 = __importDefault(require("joi"));
// Define the Joi schema for validation
const validateUser = joi_1.default.object({
    username: joi_1.default.string().required(),
    firstname: joi_1.default.string().required(),
    lastname: joi_1.default.string().required(),
    email_address: joi_1.default.string().email().required(), // Ensures valid email format
    phone_number: joi_1.default.string().required() // You might want to add a regex pattern for phone numbers
});
exports.validateUser = validateUser;
//# sourceMappingURL=form_validations.js.map