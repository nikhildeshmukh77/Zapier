import { Router } from "express";
import { prismaClient } from "../db";
import { authMiddleware } from "../middleware";
import { signupSchema } from "../types";

const router = Router();

router.post("/signup", async (req, res) => {
    const parsedData = signupSchema.safeParse(req.body);

    if (!parsedData.success) {
        return res.status(411).json({
            message: "Incorrect inputs",
        });
    }

    const userExists = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username,
        },
    });

    if (userExists) {
        return res.status(403).json({
            message: "User already exists",
        });
    }

    await prismaClient.user.create({
        data: {
            email: parsedData.data.username,
            password: parsedData.data.password,
            name: parsedData.data.name
        },
    });

    return res.status(201).json({
        message: "User created successfully",
    });
});

router.post("/signin", async (req, res) => {
    return res.status(200).json({ message: "Signin handler" });
});

router.post("/user", authMiddleware, (req, res) => {
    return res.status(200).json({ message: "User handler" });
});

export const userRouter = router;
