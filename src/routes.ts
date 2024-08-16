import { Router } from "express";
const router = Router();
import mongoose from "mongoose";
import {
  retrieveUsers,
  addUser,
  updateUser,
  deleteUser,
} from "./controller/user";
import { login } from "./login";
import { verifeciation } from "./middleware/authorization";
import { adminAccess } from "./middleware/roleBaseAuth";
mongoose.connect(
  `mongodb+srv://kayanan96:${process.env.PASSWORD}@cluster0.yqcw3k7.mongodb.net/expenseTracker`
);
router.route("/user/login").get(login);

router
  .route("/user")
  .get(verifeciation, retrieveUsers)
  .post(addUser)
  .patch(verifeciation, adminAccess, updateUser)
  .delete(verifeciation, adminAccess, deleteUser);

router.route("/bank").get().post().patch().delete();

router.route("/transaction").get().post().patch().delete();
export default router;
