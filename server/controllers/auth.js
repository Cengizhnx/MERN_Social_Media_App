import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

/* User Register */

export const register = async (req, res, next) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000),
        })

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        })
        if (!user) {
            return next(createError(404, "User not found!"))
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) {
            return next(createError(400, "Wrong password or email!"))
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT)

        const { password, ...otherDetails } = user._doc;

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json({ ...otherDetails });
    } catch (err) {
        next(err)
    }
}