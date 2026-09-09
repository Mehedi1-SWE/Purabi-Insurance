import mongoose from "mongoose";
const schema=new mongoose.Schema({slug:{type:String,required:true,unique:true,lowercase:true,trim:true},category:{type:String,required:true},title:{type:String,required:true},text:{type:String,required:true},content:{type:String,default:""},image:{type:String,default:""},readTime:{type:String,default:""},published:{type:Boolean,default:true}},{timestamps:true});
export default mongoose.model("Blog",schema);
