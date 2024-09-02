import { MongoClient, Db } from 'mongodb';

// Use your provided MongoDB connection URI
const uri : string | undefined = process.env.MONGO_URL

if (!uri) {
    throw new Error("MONGO_URL is not defined in the environment variables.");
}

// Create an instance of MongoClient
const client = new MongoClient(uri);

// Function to connect to the database
export async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');
        const db = client.db('user_mgmt');
        return db;
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
}

// Function to close the MongoDB connection
export async function closeConnection() {
    await client.close();
    console.log('MongoDB connection closed');
}
