import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

app.use(express.json({limit:"200kb"}));
app.use(express.urlencoded({limit:"16kb",extended:true}))
app.use(cookieParser());
app.use(cors(
    {
        origin:process.env.ORIGIN,
        credentials:true,
    }
));



// import route
import { router } from "./src/routes/school.route.js";

app.use("/api/v1",router)

export {app}