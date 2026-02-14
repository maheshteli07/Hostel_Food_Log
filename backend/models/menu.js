const mongoose=require('mongoose');
const Schmema=mongoose.Schema({
    day:{
        type:String,
        required:true
    },
    breakfast:{
        type:String,
        required:true
    },
    lunch:{
        type:String,
        required:true
    },
    snacks:{
        type:String,
        required:true
    }

})
module.exports=mongoose.model('Menu',Schmema)