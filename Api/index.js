import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
mongoose.connect(

    process.env.MONGU

).then(()=>{
    console.log("mOngoDB is connected !!")
}).catch((err)=>{
    console.log(err)
})

const app=express();

app.listen(3000,()=>{
    console.log("App is listening on server 3000")
})