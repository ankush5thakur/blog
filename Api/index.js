import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "../routes/user.route.js";
import authRoutes from "../routes/auth.route.js";

dotenv.config()
mongoose.connect(

    process.env.MONGU

).then(()=>{
    console.log("mOngoDB is connected !!")
}).catch((err)=>{
    console.log(err)
})

const app=express();
app.use(express.json())
app.listen(3000,()=>{
    console.log("App is listening on server 3000")
})

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)


// new middleware-->>  1 july-->>  1:40:00
app.use((err,req,res,next)=>{
    const statusCode= err.statusCode ||500;
    const message = err.message || "internal server error ";
    res.status(statusCode).json({
        suuccess:false,
        statusCode,
        message
    })
})