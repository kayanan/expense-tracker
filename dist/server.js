"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import env from "dotenv";
// env.config();
const express_1 = __importDefault(require("express"));
const app_1 = require("./app");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);
(0, app_1.appRouting)(app);
app.listen(PORT, () => {
    console.log("Server is running");
});
