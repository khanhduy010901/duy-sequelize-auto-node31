
import express from "express";
import { createUser, getUser, removeUser, updateUser, createUserLike, createUserRate, createUserOder } from "../controllers/userController.js";
const userRouter = express.Router();


// Quản lý Restful API

userRouter.get("/get-user", getUser);
userRouter.post("/create-user", createUser);
userRouter.put("/update-user", updateUser);
userRouter.delete("/remove-user", removeUser);

userRouter.post("/user-like", createUserLike);
userRouter.post("/user-rate", createUserRate);
userRouter.post("/user-oder", createUserOder);

export default userRouter;