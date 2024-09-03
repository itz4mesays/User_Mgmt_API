import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose';

// Use your provided MongoDB connection URI
const uri: string | undefined = process.env.MONGO_URL;

if (!uri) {
    throw new Error("MONGO_URL is not defined in the environment variables.");
}

// Function to connect to the database using Mongoose
export async function connectToDatabase() {
    try {
        //The uri! syntax is a non-null assertion that tells TypeScript to treat uri as a non-null and non-undefined value
        await mongoose.connect(uri!)
        console.log('Connected successfully to MongoDB using Mongoose');
    } catch (error) {
        console.error('Failed to connect to MongoDB using Mongoose:', error);
        throw error;
    }
}

// Function to close the Mongoose connection
export async function closeConnection() {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed using Mongoose');
    } catch (error) {
        console.error('Failed to close MongoDB connection using Mongoose:', error);
        throw error;
    }
}