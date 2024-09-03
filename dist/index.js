"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const mongo_connection_1 = require("./connection/mongo_connection");
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
(0, mongo_connection_1.connectToDatabase)(); //connect to mongodb
// Middleware
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: '*' }));
app.use((0, morgan_1.default)('combined')); // Fix the typo: "combinged" to "combined"
// Set the port, ensuring it’s a number or string
const port = process.env.APP_PORT || 1021;
// Define a basic route
app.get('/', (req, res) => {
    return res.status(200).json({
        error: false,
        message: "This is my backend for user management using TypeScript"
    });
});
app.use('/api/v1', index_1.default);
// Start the server
app.listen(port, () => {
    console.log(`My User Management App with TypeScript is up and running on PORT ${port}`);
});
//# sourceMappingURL=index.js.map