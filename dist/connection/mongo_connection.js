"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = connectToDatabase;
exports.closeConnection = closeConnection;
const mongodb_1 = require("mongodb");
// Use your provided MongoDB connection URI
const uri = process.env.MONGO_URL;
if (!uri) {
    throw new Error("MONGO_URL is not defined in the environment variables.");
}
// Create an instance of MongoClient
const client = new mongodb_1.MongoClient(uri);
// Function to connect to the database
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log('Connected successfully to MongoDB');
            const db = client.db('user_mgmt');
            return db;
        }
        catch (error) {
            console.error('Failed to connect to MongoDB:', error);
            throw error;
        }
    });
}
// Function to close the MongoDB connection
function closeConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.close();
        console.log('MongoDB connection closed');
    });
}
//# sourceMappingURL=mongo_connection.js.map