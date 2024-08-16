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
exports.verifeciation = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//createToken
const createToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = jsonwebtoken_1.default.sign(Object.assign({}, user), process.env.SECRET, { expiresIn: "1h" });
        return token;
    }
    catch (error) {
        console.log("internal Error");
        return false;
    }
});
exports.createToken = createToken;
//verifeciation usin jwt token
const verifeciation = (req, res, next) => {
    try {
        if (req.body.token) {
            const decoded = jsonwebtoken_1.default.verify(req.body.token, process.env.SECRET);
            if (decoded) {
                console.log(decoded._doc.role);
                req.body.role = decoded._doc.role;
                next();
            }
            else {
                res.status(404).json({
                    message: "auth failed",
                });
            }
        }
        else {
            res.status(404).json({
                message: "auth failed",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: "internal error",
        });
    }
};
exports.verifeciation = verifeciation;
//verifeciation using roll base;
