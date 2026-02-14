const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const studentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    sspId:{
        type:String,
        required:true
    }
})