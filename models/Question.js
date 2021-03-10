const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    question:{
        type:String,
       
    },
    answer:{
        type:String,
       
    },
    false_choices:{
        type:Array,
        
    },
    points:{
        type:Number,
        
    },
  
});

module.exports = mongoose.model('Question', QuestionSchema);