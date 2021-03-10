const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    full_name:{
        type:String,
        
    },
    
    phone:{
        type:Number,
        
    },
    password:{
        type:String,
    },
});

module.exports = mongoose.model('Admin', AdminSchema);