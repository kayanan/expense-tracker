import { Router } from "express";
import { tokenVerifeciation } from "../../middleware/authorization";
import { adminAccess } from "../../middleware/roleBaseAuth";
import {getAllBank,addBank,deleteBank,updateBank} from "./controller/bankController"
const bankRout= Router();


bankRout.route("/").get(/*tokenVerifeciation*/getAllBank).post(addBank);
bankRout.route("/:id").get(/*tokenVerifeciation,adminAccess*/).patch(/*tokenVerifeciation,adminAccess*/updateBank).delete(/*tokenVerifeciation,adminAccess*/deleteBank);





export default bankRout;