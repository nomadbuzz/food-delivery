import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://bazcoding:Baztaya2126@cluster0.mncv3ey.mongodb.net/food-del').then(()=>console.log("DB connected"));

    
}