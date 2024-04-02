import { catchAsyncError } from "./catchAsyncErrors.js"
import { User } from "../models/user.js"
import ErrorHandler from "./error.js"
import jwt from 'jsonwebtoken'
export const isAuthorized=catchAsyncError(async(req,res,next)=>{
    const {token}=req.cookies;

    //if not token
    if(!token){
        return next(new ErrorHandler("User not authorized",400))

    }

    const decoded=jwt.verify(token,process.env.JWT_SECRET);

    req.user=await User.findById(decoded.id);
    next();
})