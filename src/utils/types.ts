import { Request } from 'express';

// Define your custom request body type
export type NewUserRequest = {
    username: string;
    firstname: string;
    lastname: string;
    email_address: string;
    phone_number: string;
};


// Extend the Express Request type to include the new body type
// export type NewUserRequest = Request<{}, {}, NewUserRequestBody>;