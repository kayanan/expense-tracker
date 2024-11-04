import { Application } from "express"
import userRout from "./module/user/routes"

const routes=(app:Application)=>{

app.use("/user",userRout);

}

export default routes;