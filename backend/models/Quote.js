import mongoose from "mongoose";
const schema=new mongoose.Schema({customer:{type:mongoose.Schema.Types.ObjectId,ref:"User",default:null},name:{type:String,required:true,trim:true},email:{type:String,required:true,lowercase:true,trim:true},phone:{type:String,required:true,trim:true},insuranceType:{type:String,required:true,trim:true},coverageAmount:{type:Number,default:0},message:{type:String,default:""},status:{type:String,enum:["pending","reviewing","approved","rejected"],default:"pending"}},{timestamps:true});
export default mongoose.model("Quote",schema);
