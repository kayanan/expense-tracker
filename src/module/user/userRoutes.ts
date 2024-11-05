import { Router } from "express";
const userRoute = Router();

import {
  retrieveUsers,
  retrieveUser,
  addUser,
  updateUser,
  deleteUser,
} from "./controller/user";
import { login } from "../../middleware/login";
import { tokenVerifeciation } from "../../middleware/authorization";
import { adminAccess } from "../../middleware/roleBaseAuth";
import { inputValidator } from "../../middleware/inputValidator";


userRoute.route("/login").get(login);
userRoute.route("/signup").post(inputValidator, addUser);
userRoute.route("/").get(retrieveUsers)
  
userRoute.route("/:id").get(tokenVerifeciation, adminAccess,retrieveUser).patch(tokenVerifeciation, adminAccess, updateUser).delete(tokenVerifeciation, adminAccess, deleteUser);


export default userRoute;
