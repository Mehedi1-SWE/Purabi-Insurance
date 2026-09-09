import jwt from "jsonwebtoken";
import User from "../models/User.js";
import ApiError from "../utils/ApiError.js";

const protect = async (req,res,next) => {
  const header=req.headers.authorization;
  if(!header?.startsWith("Bearer ")) return next(new ApiError(401,"Authentication required."));
  try {
    const decoded=jwt.verify(header.split(" ")[1],process.env.JWT_SECRET);
    const user=await User.findById(decoded.id).select("-password");
    if(!user) return next(new ApiError(401,"User no longer exists."));
    req.user=user; next();
  } catch { next(new ApiError(401,"Invalid or expired token.")); }
};
export default protect;
