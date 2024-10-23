import express from "express";
import { appRouting } from "./app";

const app = express();
const { PORT = 3000 } = process.env;
appRouting(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
