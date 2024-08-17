// import env from "dotenv";
// env.config();
import express from "express";
import { appRouting } from "./app";

const app = express();
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);

appRouting(app);
app.listen(PORT, () => {
  console.log("Server is running");
});
