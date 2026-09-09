import ApiError from "../utils/ApiError.js";
const allowRoles=(...roles)=>(req,res,next)=>{
  if(!req.user || !roles.includes(req.user.role)) return next(new ApiError(403,"You do not have permission to access this resource."));
  next();
};
export default allowRoles;
