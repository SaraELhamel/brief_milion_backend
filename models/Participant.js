const mongoose = require('mongoose');

const ParticipantSchema = mongoose.Schema({
    full_name:{
        type:String,
        
    },
    age:{
        type:Number,
        
    },
    phone:{
        type:Number,
        
    },
    is_valid:{
        type:Boolean,
        
    },
   online:{
        type:Boolean,
        
    },
    password:{
        type:String,
        
    },
    points:{
        type :Number,
        default :0
    }
});

module.exports = mongoose.model('Participant', ParticipantSchema);