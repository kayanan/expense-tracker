"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidator = void 0;
const Pattern = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    mobile: /^0[\d]{9}$/,
    nic: /^((\d{9}[vVxX])|\d{12})$/,
};
const inputValidator = (req, res, next) => {
    const errorMessage = { Message1: "Email Address not ok", Message2: "nic number not ok", Message3: "mobile number not ok"
    };
    let correct = 0;
    for (const key in req.body) {
        switch (key) {
            case "email" /* UserKey.EMAIL */:
                if (Pattern.email.test(req.body["email" /* UserKey.EMAIL */])) {
                    correct++;
                    errorMessage.Message1 = "Email Address ok";
                }
                break;
            case "nic" /* UserKey.NIC */:
                if (Pattern.nic.test(req.body["nic" /* UserKey.NIC */])) {
                    correct++;
                    errorMessage.Message2 = "nic number ok";
                }
                break;
            case "mobile" /* UserKey.MOBILE */:
                if (Pattern.mobile.test(req.body["mobile" /* UserKey.MOBILE */])) {
                    correct++;
                    errorMessage.Message3 = "mobile number ok";
                }
                break;
        }
    }
    if (correct < 2) {
        res.status(400).json(errorMessage);
        console.log("hida");
    }
    else {
        console.log("bye da");
        next();
    }
};
exports.inputValidator = inputValidator;
