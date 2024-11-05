import { Application } from "express"
import userRoute from "./module/user/userRoutes"
import bankRoute from "./module/bank/bankRoute";

const routes=(app:Application)=>{

app.use("/user",userRoute);
app.use("/bank",bankRoute);
}

export default routes;