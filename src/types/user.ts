import mongoose from "mongoose";

export const enum Role {
  USER = "user",
  ADMIN = "admin",
}
export const enum UserKey{
    ID="_id",
    NAME="name",
    NIC="nic",
    USER_NAME="userName",
    PASSWORD="password",
    STATUS="status",
    EMAIL="email",
    MOBILE="mobile",
    ROLE="role"
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
  name: string;
  nic: string;
  userName: string;
  password: string;
  createdAt?: Date;
  status?: Status;
  login: {};
  email: string;
  mobile: string;
  role: Role;
}
