import mongoose from "mongoose";
import "dotenv/config"
const connectionString = process.env.mongodb_connection_string as string 
mongoose.connect(connectionString)

const userSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String,
    age: Number
})

export const userModel =  mongoose.model("user", userSchema)


