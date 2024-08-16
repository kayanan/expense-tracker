import mongoose from "mongoose";

export const enum Role {
  USER = "user",
  ADMIN = "admin",
}
export const enum Status {
  ACTIVE = "active",
  DEACTIVE = "deactive",
}

export type user = {
  _id?: mongoose.ObjectId;
  name: String;
  nic: String;
  userName: String;
  password: String;
  createdAt?: Date;
  status?: Status;
  login?: {};
  email: String;
  mobile: String;
  role: Role;
};

export interface InterfaceUser {
  _id: mongoose.ObjectId;
  name: String;
  nic: String;
  userName: String;
  password: String;
  createdAt?: Date;
  status?: String;
  login: {};
  email: String;
  mobile: String;
  role: String;
}
