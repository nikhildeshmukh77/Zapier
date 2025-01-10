import { Router } from "express";
import { authMiddleware } from "../middleware";
const router = Router();

router.post("/", authMiddleware, (req,res) => {
    
})

router.post("/", authMiddleware, (req,res) => {
    
})

router.get("/:zapId", authMiddleware, (req,res) => {
    
})

export const zapRouter = router;