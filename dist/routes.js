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
const inputValidator_1 = require("./middleware/inputValidator");
mongoose_1.default.connect(process.env.DB_URL);
router.route("/login").get(login_1.login);
router.route("/user/signup").post(inputValidator_1.inputValidator, user_1.addUser);
router
    .route("/user")
    .get(authorization_1.verifeciation, user_1.retrieveUsers)
    .patch(authorization_1.verifeciation, roleBaseAuth_1.adminAccess, user_1.updateUser)
    .delete(authorization_1.verifeciation, roleBaseAuth_1.adminAccess, user_1.deleteUser);
router.route("/bank").get().post().patch().delete();
router.route("/transaction").get().post().patch().delete();
exports.default = router;
