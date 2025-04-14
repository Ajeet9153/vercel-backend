import mongoose from "mongoose";

export const connectDB = async ()=>{
  await mongoose.connect('mongodb+srv://ajeetkumar4035:hfjBNvduWquDN7F1@cluster0.smmco.mongodb.net/').then(()=>console.log("DB Connected"));
}
