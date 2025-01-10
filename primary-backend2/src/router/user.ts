import { Router } from "express";
import { authMiddleware } from "../middleware";
import { signupSchema,signinSchema } from "../types";

const router = Router();

router.post("/signup",  (req,res) => {
    const body = req.body;
    const parsedData = signupSchema.safeParse(body);

    if(!parsedData.success) {
        return res.status(411).json({
            message : "Incorrect Data",
        })
    }
})