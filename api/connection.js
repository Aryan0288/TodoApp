

import mongoose from 'mongoose';

const DATABASE_URL = "mongodb+srv://aryan0288be21:dsobPZqBp2ymqN2u@backend.twcjivf.mongodb.net/todoPrac"

const mongoConnect = () => {
  try {
    mongoose.connect(DATABASE_URL).then(()=>console.log("Connected to DB"));
  } catch (err) {
    console.log("Error during connection ", err.message);  
  }
};

export default mongoConnect;



