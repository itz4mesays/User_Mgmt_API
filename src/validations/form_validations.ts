import Joi from 'joi';

// Define the Joi schema for validation
const validateUser = Joi.object({
    username: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email_address: Joi.string().email().required(), // Ensures valid email format
    phone_number: Joi.string().required() // You might want to add a regex pattern for phone numbers
});


export { validateUser }
