import { Router } from "express";
import { tokenVerifeciation } from "../../middleware/authorization";
import { adminAccess } from "../../middleware/roleBaseAuth";

const bankRout= Router();


bankRout.route("/").get(tokenVerifeciation);
bankRout.route("/:id").get(tokenVerifeciation,adminAccess).patch(tokenVerifeciation,adminAccess).delete(tokenVerifeciation,adminAccess);





export default bankRout;