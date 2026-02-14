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
    },
    mobileNo:{
        type:String,
        required:true 
    },
    snackType:{
        type:String,
        required:true,
        default:'Egg'
    },
    hostelNo:{
        type:String,
        required:true
    }
})
const student= mongoose.model('Student',studentSchema);
module.exports=student;