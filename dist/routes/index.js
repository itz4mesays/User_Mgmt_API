"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userController = new user_controller_1.default;
const router = express_1.default.Router();
router.post('/users', userController.createUser);
exports.default = router;
//# sourceMappingURL=index.js.map