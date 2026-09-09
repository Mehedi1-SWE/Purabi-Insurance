import jwt from "jsonwebtoken";
const generateToken = (user) => {
  if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is missing in .env");
  return jwt.sign({id:user._id.toString(),role:user.role,email:user.email},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN||"7d"});
};
export default generateToken;
