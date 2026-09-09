import mongoose from "mongoose";
const schema=new mongoose.Schema({customer:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},policyNumber:{type:String,required:true,unique:true},policyType:{type:String,required:true},premium:{type:Number,required:true,min:0},coverageAmount:{type:Number,required:true,min:0},startDate:{type:Date,required:true},endDate:{type:Date,required:true},status:{type:String,enum:["active","expired","cancelled","pending"],default:"active"}},{timestamps:true});
export default mongoose.model("Policy",schema);
