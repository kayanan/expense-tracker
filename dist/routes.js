"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("./controller/user");
const login_1 = require("./login");
const authorization_1 = require("./middleware/authorization");
const roleBaseAuth_1 = require("./middleware/roleBaseAuth");
mongoose_1.default.connect(`mongodb+srv://kayanan96:${process.env.PASSWORD}@cluster0.yqcw3k7.mongodb.net/expenseTracker`);
router.route("/user/login").get(login_1.login);
router
    .route("/user")
    .get(authorization_1.verifeciation, user_1.retrieveUsers)
    .post(user_1.addUser)
    .patch(authorization_1.verifeciation, roleBaseAuth_1.adminAccess, user_1.updateUser)
    .delete(authorization_1.verifeciation, roleBaseAuth_1.adminAccess, user_1.deleteUser);
router.route("/bank").get().post().patch().delete();
router.route("/transaction").get().post().patch().delete();
exports.default = router;
