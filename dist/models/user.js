"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: {
        required: true,
        type: String
    },
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    email_address: {
        required: true,
        type: String,
        unique: true
    },
    phone_number: {
        required: true,
        type: String,
        unique: true
    }
}, {
    timestamps: true
});
exports.User = mongoose_1.default.model('User', UserSchema);
//# sourceMappingURL=user.js.map