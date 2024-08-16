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
exports.deleteUser = exports.updateUser = exports.addUser = exports.retrieveUsers = void 0;
// import {InterfaceUser} from "../types/user"
const userSchema_1 = __importDefault(require("./model/userSchema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
//retrieveUsers from data base
const retrieveUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userSchema_1.default.find();
        res.status(200).json({
            result: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.retrieveUsers = retrieveUsers;
// addUser in to data base
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
        const tempUser = Object.assign({}, req.body);
        tempUser.password = hashedPassword;
        const user = new userSchema_1.default(tempUser);
        const result = yield user.save();
        res.status(201).json({ created: result });
    }
    catch (error) {
        res.status(500).json({
            error: error,
        });
    }
});
exports.addUser = addUser;
// updateUser from data base
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userSchema_1.default.findOneAndUpdate({ userName: req.body.userName }, Object.assign({}, req.body));
        res.status(201).json({
            sucess: result,
        });
    }
    catch (error) {
        res.status(500).json({
            "update fail": error,
        });
    }
});
exports.updateUser = updateUser;
// deleteUser from data base
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userSchema_1.default.deleteOne({ _id: req.body._id });
        res.status(201).json({ "deleted sucessfully": result });
    }
    catch (error) {
        res.status(500).json({
            "deletion Failed": error,
        });
    }
});
exports.deleteUser = deleteUser;
