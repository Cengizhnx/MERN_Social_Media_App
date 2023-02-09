import express from "express";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import cookieParser from 'cookie-parser'

dotenv.config();

const app = express()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected MongoDB");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
})

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
})

app.use(cookieParser())
app.use(express.json())

app.use("/auth", authRouter)
app.use("/users", usersRouter)

app.listen(3001, () => {
    connect()
    console.log("Connected to backend.");
})