import { Router } from "express";
const router = Router();

import {
  retrieveUsers,
  addUser,
  updateUser,
  deleteUser,
} from "./controller/user";
import { login } from "../../middleware/login";
import { verifeciation } from "../../middleware/authorization";
import { adminAccess } from "../../middleware/roleBaseAuth";
import { inputValidator } from "../../middleware/inputValidator";


router.route("/login").get(login);
router.route("/signup").post(inputValidator, addUser);
router
  .route("/")
  .get(verifeciation, retrieveUsers)
  .patch(verifeciation, adminAccess, updateUser)
  .delete(verifeciation, adminAccess, deleteUser);


export default router;
