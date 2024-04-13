import mongoose from 'mongoose';
// this is schema
const todoSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true,
  }
});

export const todo=mongoose.model("todo",todoSchema);