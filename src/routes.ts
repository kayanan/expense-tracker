import { Router } from "express";
const router = Router();
import mongoose from "mongoose";
import {
  retrieveUsers,
  addUser,
  updateUser,
  deleteUser,
} from "./controller/user";
import { login } from "./middleware/login";
import { verifeciation } from "./middleware/authorization";
import { adminAccess } from "./middleware/roleBaseAuth";
import { inputValidator } from "./middleware/inputValidator";
mongoose.connect(process.env.DB_URL!);

router.route("/login").get(login);
router.route("/user/signup").post(inputValidator, addUser);
router
  .route("/user")
  .get(verifeciation, retrieveUsers)
  .patch(verifeciation, adminAccess, updateUser)
  .delete(verifeciation, adminAccess, deleteUser);

router.route("/bank").get().post().patch().delete();

router.route("/transaction").get().post().patch().delete();
export default router;
