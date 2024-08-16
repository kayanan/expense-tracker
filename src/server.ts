import env from "dotenv";
import express from "express";
import { appRouting } from "./app";

env.config();
const app = express();
const PORT = process.env.PORT || 3000;

appRouting(app);
app.listen(PORT, () => {
  console.log("Server is running");
});
