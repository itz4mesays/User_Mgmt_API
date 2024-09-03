import dotenv from 'dotenv'
dotenv.config()
import Joi from 'joi'

// Define the schema for validation
const envSchema  : Joi.ObjectSchema = Joi.object({
    APP_PORT: Joi.number().required(),
    MONGO_URL: Joi.string().required(),
})
    .unknown() // Allow additional environment variables not specified in the schema
    .required();

// Validate the environment variables against the schema
const { error, value: envVars } = envSchema.validate(process.env, {
    abortEarly: true, // Return all errors found
});

// If validation fails, throw an error and exit
if (error) {
    throw new Error(`Environment variable validation error: ${error.details[0].message}`)
    process.exit(1); // Exit the process with an error code
}

// If validation is successful, you can safely use envVars
export default envVars;
