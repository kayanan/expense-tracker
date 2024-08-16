"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouting = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const routes_1 = __importDefault(require("./routes"));
const appRouting = (app) => {
    app.use((0, morgan_1.default)("dev"));
    app.use(express_1.default.json({}));
    app.use(routes_1.default);
    app.use((req, res, next) => {
        const error = new Error("page not found");
        error.status = 404;
        next(error);
    });
    app.use((error, req, res, next) => {
        res.status(error.status || 500).json({
            "ERROR MESSAGE": error.message,
        });
    });
};
exports.appRouting = appRouting;
