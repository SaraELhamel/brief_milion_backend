const express = require('express');
const router = express.Router();
const Question = require('../models/Question');


router.get('/allQ',async (req,res)=> {
    try{
        const question = await Question.find();
        res.json(question);
    }catch
        (err){
            res.json({message:err});
    }
});

router.get('/onequestion', async (req,res)=>{

    Question.count().exec(function (err, count) {
      var random = Math.floor(Math.random() * count)
      Question.findOne().skip(random).exec(
        function (err, result) {
            res.send(result)
          console.log(random)
          console.log(result) 
        })
    })

    
});


router.post('/addquest',async (req,res)=> {
    const question = new Question({
        question: req.body.question,
        answer:req.body.answer,
        false_choices:req.body.false_choices,
        points: req.body.points,
        
    });
    try{
        const saveQuestion = await question.save();
        res.json(saveQuestion);
    }catch (err){
res.json({message:err});
    }
    
});

module.exports = router;