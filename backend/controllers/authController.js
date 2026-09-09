import bcrypt from "bcryptjs";
import User from "../models/User.js";
import OTP from "../models/OTP.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import generateOTP from "../utils/generateOTP.js";
import generateToken from "../utils/generateToken.js";
import sendOTP from "../utils/sendOTP.js";

const saveOTP=async(email,purpose)=>{const otp=generateOTP();const minutes=Number(process.env.OTP_EXPIRES_MINUTES||10);await OTP.deleteMany({email,purpose});await OTP.create({email,otp,purpose,expiresAt:new Date(Date.now()+minutes*60000)});await sendOTP({email,otp});return otp;};

export const register=asyncHandler(async(req,res)=>{const{name,email,phone,password}=req.body;if(!name||!email||!phone||!password)throw new ApiError(400,"Name, email, phone and password are required.");if(password.length<6)throw new ApiError(400,"Password must be at least 6 characters.");const e=email.toLowerCase().trim();if(await User.findOne({email:e}))throw new ApiError(409,"An account already exists with this email.");const user=await User.create({name:name.trim(),email:e,phone:phone.trim(),password:await bcrypt.hash(password,10)});const otp=await saveOTP(e,"signup");res.status(201).json({success:true,message:"Registration created. Verify the OTP to activate your account.",data:{user:{id:user._id,name:user.name,email:user.email,phone:user.phone,role:user.role,isVerified:user.isVerified},...(process.env.NODE_ENV==="development"?{developmentOtp:otp}:{})}});});

export const verifyOTP=asyncHandler(async(req,res)=>{const{email,otp,purpose="signup"}=req.body;if(!email||!otp)throw new ApiError(400,"Email and OTP are required.");const e=email.toLowerCase().trim();const record=await OTP.findOne({email:e,purpose});if(!record||record.otp!==String(otp))throw new ApiError(400,"OTP is invalid or expired.");await OTP.deleteMany({email:e,purpose});const user=await User.findOne({email:e});if(!user)throw new ApiError(404,"User not found.");user.isVerified=true;await user.save();const token=generateToken(user);res.json({success:true,message:"OTP verified successfully.",data:{token,user:{id:user._id,name:user.name,email:user.email,phone:user.phone,role:user.role,isVerified:user.isVerified}}});});

export const resendOTP=asyncHandler(async(req,res)=>{const{email,purpose="signup"}=req.body;if(!email)throw new ApiError(400,"Email is required.");const e=email.toLowerCase().trim();if(!await User.findOne({email:e}))throw new ApiError(404,"User not found.");const otp=await saveOTP(e,purpose);res.json({success:true,message:"A new OTP has been generated.",...(process.env.NODE_ENV==="development"?{developmentOtp:otp}:{})});});

export const login=asyncHandler(async(req,res)=>{const{email,password}=req.body;if(!email||!password)throw new ApiError(400,"Email and password are required.");const user=await User.findOne({email:email.toLowerCase().trim()});if(!user||!(await bcrypt.compare(password,user.password)))throw new ApiError(401,"Invalid email or password.");if(!user.isVerified)throw new ApiError(403,"Please verify your account with OTP before logging in.");const token=generateToken(user);res.json({success:true,message:"Login successful.",data:{token,user:{id:user._id,name:user.name,email:user.email,phone:user.phone,role:user.role,isVerified:user.isVerified}}});});

export const me=asyncHandler(async(req,res)=>res.json({success:true,data:{user:req.user}}));
