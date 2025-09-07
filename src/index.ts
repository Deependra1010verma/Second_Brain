import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { userModel , ContentModel} from "./db";
import { JWT_PASSWORD} from "./config";
import { userMiddleware } from "./middleware";

const app = express();
app.use(express.json());

app.post("/api/v1/signup",  async (req,res)=>{
    //here are some todos to do
    //1. validate the request body using zod
    //2. hash the password using bcryptjs
    //3. store the user in the database
    //4. return a jwt token to the user

    //write the code for zod validation here and after that write the code 
    //also write the code for hashing the password using bcryptjs

    const {username,password} = req.body;

    try{
    await userModel.create({
        username:username,
        password:password
    })


    res.json({
        message:"user Signed up successfully"
    })
    } catch(e){
    res.status(411).json({
        message:"user already exists"
    })
}
})

app.post("/api/v1/signin", async (req,res)=>{
    const {username,password} = req.body;

    const existingUser = await userModel.findOne({
        username:username,
        password:password
    })

    if(existingUser){
        const token = jwt.sign({
            id:existingUser._id
        }, JWT_PASSWORD)

        res.json({
            message:"user signed in successfully",
            token:token
        })
    }else{
        res.status(403).json({
            message:"invalid credentials"
        })
    }
    res.json({
        message:"signin route"
    })
})

app.post("/api/v1/content",userMiddleware,async (req,res)=>{
    const link = req.body.link;
    const type = req.body.type;

    await ContentModel.create({
        link:link,
        type:type,
        // @ts-ignore
        serId:req.userId,
        tags:[]
    })
    return res.json({
        message: "content added"
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

app.get("/api/v1/brain/:shareLink",(req,res)=>{
    res.json({
        message:"getting teh shared brain route"
    })
})

app.listen(process.env.PORT);