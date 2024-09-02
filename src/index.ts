import dotenv from 'dotenv'
dotenv.config();
import express, { Request, Response } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import envVars from './validations/validateEnv'
import { connectToDatabase } from './connection/mongo_connection'

const app = express();

connectToDatabase()

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(morgan('combined')); // Fix the typo: "combinged" to "combined"

// Set the port, ensuring it’s a number or string
const port: number | string = process.env.APP_PORT || 1021;

// Define a basic route
app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        error: false,
        message: "This is my backend for user management using TypeScript"
    });
})

// Start the server
app.listen(port, () => {
    console.log(`My User Management App with TypeScript is up and running on PORT ${port}`);
})