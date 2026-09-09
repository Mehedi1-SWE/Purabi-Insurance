import mongoose from "mongoose";
const schema=new mongoose.Schema({
 user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true,unique:true},agentCode:{type:String,required:true,unique:true},
 commissionRate:{type:Number,default:5,min:0,max:100},status:{type:String,enum:["active","inactive","pending"],default:"pending"},address:{type:String,default:""}
},{timestamps:true});
export default mongoose.model("Agent",schema);
