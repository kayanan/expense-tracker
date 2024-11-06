import mongoose from "mongoose";
import { InterfaceUser, Role, Status } from "./types/user";

const { Schema } = mongoose;

const userSchema = new Schema<InterfaceUser>({
  _id:mongoose.Schema.ObjectId,
  name: { type: String, required: true },
  nic: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  status: {
    type: String,
    enum: [Status.ACTIVE, Status.DEACTIVE],
    default: Status.DEACTIVE,
  },
  role: {
    type: String,
    enum: [Role.ADMIN, Role.USER],
    default: Role.USER,
  },
  createdAt: { type: Date, default: Date.now },
  login: {  },// want to modify this field later
});

const userModel = mongoose.model<InterfaceUser>("User", userSchema);

export default userModel;
