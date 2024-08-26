import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

//createToken
export const createToken = async (user: any) => {
  try {
    const token = jwt.sign({...user}, process.env.SECRET!, { expiresIn: "1h" });
    return token;
  } catch (error) {
    console.log("internal Error");
    return false;
  }
};
//verifeciation usin jwt token
export const verifeciation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.token) {
      const decoded: any = jwt.verify(req.body.token, process.env.SECRET!);
      if (decoded) {
        console.log(decoded._doc.role);
        req.body.role = decoded._doc.role;
        next();
      } else {
        res.status(404).json({
          message: "auth failed",
        });
      }
    } else {
      res.status(404).json({
        message: "auth failed",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "internal error",
    });
  }
};

//verifeciation using roll base;
