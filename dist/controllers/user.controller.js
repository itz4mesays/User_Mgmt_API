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
const util_1 = require("../utils/util");
const form_validations_1 = require("../validations/form_validations");
class UserController {
    constructor() { }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = form_validations_1.validateUser.validate(req.body, { abortEarly: false });
                if (error) {
                    return (0, util_1.handleError)(res, 422, error.details[0].message);
                    // return handleError(res, 422, error.details.map(detail => detail.message).join(', '));
                }
                return (0, util_1.successResponse)(res, 201, {}, "User details have been created");
            }
            catch (error) {
                return (0, util_1.handleError)(res, 500, error);
            }
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, util_1.successResponse)(res, 200, {}, "Success");
            }
            catch (error) {
                return (0, util_1.handleError)(res, 500, error);
            }
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, util_1.successResponse)(res, 200, {}, "Success");
            }
            catch (error) {
                return (0, util_1.handleError)(res, 500, error);
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map