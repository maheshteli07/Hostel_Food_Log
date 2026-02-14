const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const wardenSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    wardenId:{
        type:String,
        required:true,
        unique:true
    },
    hostelNo:{
        type:String,
        required:true,
        unique:true
    },
    mobileNo:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Warden',wardenSchema)