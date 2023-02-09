import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import User from "../models/User.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// // User Chech Auth

// router.get("/checkuserauth", verifyToken, (req, res, next) => {
//     res.send("Hello User, you are logged in.")
// })

// CREATE

router.post("/", verifyUser, createUser)

// UPDATE

router.put("/:id", verifyUser, updateUser)

// DELETE

router.delete("/:id", verifyUser, deleteUser)

// GET USER

router.get("/:id", verifyUser, getUser)

// GET ALL USERS

router.get("/", verifyUser, getAllUsers)


export default router