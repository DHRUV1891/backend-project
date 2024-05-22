import connectDB from "./db/index.js";
import dotenv from "dotenv";




connectDB()
// import express from "express";
// const app = express();
// ( async() => {
//     try {
//      await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
//     }
//     catch (error) {
//         console.error("Error : ",error)
//         throw err
// }
// })()