import { NextFunction, Request, Response } from "express";
import { JWT_PASSWORD } from "./config";
import jwt from "jsonwebtoken";
export function authMiddleware (req : Request, res: Response, next:NextFunction){
    const token = req.headers.authorization as string;

    try{
        const payload = jwt.verify(token,JWT_PASSWORD)
        // @ts-ignore
        req.id = payload.id
        next();
    }catch(e){
        return res.status(403).json({
            message : "you are not logged in"
        })
    }
}