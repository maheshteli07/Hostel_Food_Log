const dotenv = require('dotenv');
dotenv.config();
const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.mongo_connection_string)
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.error(err);
        console.log("error connecting to database");
    }
}
module.exports=connectDB;