import mongoose from "mongoose";
const schema=new mongoose.Schema({email:{type:String,required:true,lowercase:true,index:true},otp:{type:String,required:true},purpose:{type:String,enum:["signup","login","reset-password"],default:"signup"},expiresAt:{type:Date,required:true,index:{expires:0}}},{timestamps:true});
export default mongoose.model("OTP",schema);
