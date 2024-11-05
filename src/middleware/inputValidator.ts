import { Request, Response, NextFunction } from "express";
import { user, UserKey } from "../module/user/types/user";

const Pattern = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  mobile: /^0[\d]{9}$/,
  nic: /^((\d{9}[vVxX])|\d{12})$/,
};

export const inputValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorMessage: any = {Message1 : "Email Address not ok",Message2 : "nic number not ok",Message3 : "mobile number not ok"

  };
  let correct=0;
  for (const key in req.body) {
     switch (key) {
      case UserKey.EMAIL:
        if (Pattern.email.test(req.body[UserKey.EMAIL])) {
          correct++;
          errorMessage.Message1 = "Email Address ok";
        }
          
        break ;
      case UserKey.NIC:
        if (Pattern.nic.test(req.body[UserKey.NIC])) {
          correct++;
          errorMessage.Message2 = "nic number ok";
        }
        break ;
      case UserKey.MOBILE:
        if (Pattern.mobile.test(req.body[UserKey.MOBILE])) {
          correct++;
          errorMessage.Message3 = "mobile number ok"
        }
          
        break ;
    }
  }
  if (correct<2) {
    res.status(400).json(errorMessage);
  } else {
    next();
    
  }
};
