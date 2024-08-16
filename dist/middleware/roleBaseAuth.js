"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAccess = void 0;
const adminAccess = (req, res, next) => {
    if (req.body.role != "user" /* Role.USER */) {
        next();
    }
    else {
        res.status(500).json({
            message: "Access Denied",
        });
    }
};
exports.adminAccess = adminAccess;
