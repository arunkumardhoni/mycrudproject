import Express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./Routes/route.js";
import cors from "cors"
dotenv.config();

const app = Express();
app.use(Express.json());
app.use(cors())
app.use("/info",route)

const connect =async ()=> {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("MOngoDB is connected");
    }catch(err) {
        console.log(err);
    };
};

app.listen(5000, ()=> {
    connect();
    console.log("Server is running");
});