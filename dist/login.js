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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const userSchema_1 = __importDefault(require("./controller/model/userSchema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const authorization_1 = require("./middleware/authorization");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield userSchema_1.default.find({ userName: req.body.userName });
    const match = yield bcrypt_1.default.compare(req.body.password, Result[0].password.toString());
    if (Result[0].userName == req.body.userName && match) {
        const token = yield (0, authorization_1.createToken)(Result[0]);
        if (token) {
            res.status(200).json({
                token: token,
            });
        }
        else {
            res.status(500).json({
                error: "internal error",
            });
        }
    }
    else {
        res.status(200).json({
            error: "login failed",
        });
    }
});
exports.login = login;
