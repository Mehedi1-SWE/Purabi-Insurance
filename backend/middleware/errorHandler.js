import ApiError from "../utils/ApiError.js";
export const notFound=(req,res,next)=>next(new ApiError(404,`Route not found: ${req.method} ${req.originalUrl}`));
export const errorHandler=(err,req,res,next)=>{
  console.error(err);
  let statusCode=err.statusCode||500; let message=err.message||"Internal server error.";
  if(err.name==="ValidationError"){statusCode=400;message=Object.values(err.errors).map(e=>e.message).join(", ");}
  if(err.code===11000){statusCode=409;message=`Duplicate value for: ${Object.keys(err.keyPattern||{}).join(", ")}`;}
  res.status(statusCode).json({success:false,message,...(err.details?{details:err.details}:{}),...(process.env.NODE_ENV==="development"?{stack:err.stack}:{})});
};
