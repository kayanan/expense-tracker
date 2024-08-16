"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    name: { type: String, require: true },
    nic: { type: String, require: true, unique: true },
    userName: { type: String, require: true, unique: true },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ["active" /* Status.ACTIVE */, "deactive" /* Status.DEACTIVE */],
        default: "deactive" /* Status.DEACTIVE */,
    },
    login: {},
    email: { type: String, unique: true },
    mobile: { type: String, require: true, unique: true },
    role: { type: String, enum: ["admin" /* Role.ADMIN */, "user" /* Role.USER */], default: "user" /* Role.USER */ },
});
const userModel = mongoose_1.default.model("user", userSchema);
exports.default = userModel;
