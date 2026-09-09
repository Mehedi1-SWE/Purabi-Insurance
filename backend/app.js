import express from "express";import cors from "cors";import authRoutes from "./routes/authRoutes.js";import quoteRoutes from "./routes/quoteRoutes.js";import claimRoutes from "./routes/claimRoutes.js";import policyRoutes from "./routes/policyRoutes.js";import blogRoutes from "./routes/blogRoutes.js";import contactRoutes from "./routes/contactRoutes.js";import agentRoutes from "./routes/agentRoutes.js";import {notFound,errorHandler} from "./middleware/errorHandler.js";
const app=express();const origins=(process.env.CLIENT_URL||"http://localhost:5173").split(",").map(x=>x.trim());
app.use(cors({origin:(origin,cb)=>{if(!origin||origins.includes(origin))return cb(null,true);cb(new Error("CORS origin not allowed."));},credentials:true}));
app.use(express.json({limit:"1mb"}));app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>res.json({success:true,message:"Purabi Insurance API is running.",version:"1.0.0"}));app.get("/api/health",(req,res)=>res.json({success:true,message:"API health check passed.",timestamp:new Date().toISOString()}));
app.use("/api/auth",authRoutes);app.use("/api/quotes",quoteRoutes);app.use("/api/claims",claimRoutes);app.use("/api/policies",policyRoutes);app.use("/api/blogs",blogRoutes);app.use("/api/contact",contactRoutes);app.use("/api/agents",agentRoutes);
app.use(notFound);app.use(errorHandler);export default app;
