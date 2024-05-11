// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()























// Alternate way to connect with DB (writing code direcltly in index.js)

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants"
// import express from "express"
// const app = express()

// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log("Connected to MongoDB");

//         app.listen(process.env.PORT, () => {
//             console.log('App is listening on port:', process.env.PORT);
//         });
//     } catch (error) {
//         console.error("Error: ", error);
//         process.exit(1); // Exit the process with a non-zero exit code to indicate failure
//     }
// })();
