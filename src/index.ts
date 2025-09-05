import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";


const app = express();

app.post("/api/v1/signup",  (req,res)=>{
    res.json({
        message:"signup route"
    })
})

app.post("/api/v1/signin", (req,res)=>{
    res.json({
        message:"signin route"
    })
})

app.post("/api/v1/content",(req,res)=>{
    res.json({
        message: "content route"
    })
})

app.get("/api/v1/content",(req,res)=>{
    res.json({
        message:"getting the content route"
    })
})

app.delete("/api/v1/content",(req,res)=>{
    res.json({
        message:"deleting the content route"
    })
})

app.post("/api/v1/brain/share",(req,res)=>{
    res.json({
        message: "sharing the brain route"
    })
})

app.get("/api/vq/brain/:shareLink",(req,res)=>{
    res.json({
        message:"getting teh shared brain route"
    })
})

