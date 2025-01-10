import { Router } from "express";
import { authMiddleware } from "../middleware";

const router = Router();

router.post("/",authMiddleware, (req,res) => {
    console.log("create a zap")
})

router.post("/", authMiddleware,(req,res) => {
    console.log("zaps handler")
})

router.post("/:zapId", authMiddleware,(req,res) => {
    console.log("One Zap handler")
})

export const zapRouter = router;