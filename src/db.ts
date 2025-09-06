import mongoose, {model, Schema} from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URL as string);

const UserSchema = new Schema({
    username: {type:String, unique:true},
    password:String,
})

export const userModel = model("User", UserSchema);