import mongoose from "mongoose";
import { InterfaceUser, Role, Status } from "../../types/user";

const Schema = mongoose.Schema;
const userSchema = new Schema<InterfaceUser>({
  name: { type: String, require: true },
  nic: { type: String, require: true, unique: true },
  userName: { type: String, require: true, unique: true },
  password: { type: String },
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: [Status.ACTIVE, Status.DEACTIVE],
    default: Status.DEACTIVE,
  },
  login: {},
  email: { type: String, unique: true },
  mobile: { type: String, require: true, unique: true },
  role: { type: String, enum: [Role.ADMIN, Role.USER], default: Role.USER },
});
const userModel = mongoose.model<InterfaceUser>("user", userSchema);

export default userModel;
