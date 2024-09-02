"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const joi_1 = __importDefault(require("joi"));
// Define the schema for validation
const envSchema = joi_1.default.object({
    APP_PORT: joi_1.default.number().required(),
    MONGO_URL: joi_1.default.string().required(),
})
    .unknown() // Allow additional environment variables not specified in the schema
    .required();
// Validate the environment variables against the schema
const { error, value: envVars } = envSchema.validate(process.env, {
    abortEarly: true, // Return all errors found
});
// If validation fails, throw an error and exit
if (error) {
    throw new Error(`Environment variable validation error: ${error.details[0].message}`);
    process.exit(1); // Exit the process with an error code
}
// If validation is successful, you can safely use envVars
exports.default = envVars;
//# sourceMappingURL=validateEnv.js.map