const mongoose=require('mongoose');

const UserSchema =mongoose.Schema({
    Name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    LoginPassword:{
       type:String,
        required:true
    },
    State:{
      type:String,
        required:true
    },
   
    mobilenumber:{

      type:String,
        required:true
    },
    caste:{

      type:String,
        required:true
    },
    
    mothertongue:{
      type:String,
        required:true
    }
})
module.exports=mongoose.model ("User",UserSchema);