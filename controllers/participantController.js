const Participant = require('../models/Participant');
const sendEmail = require('../email');
const jwt = require('jsonwebtoken');
const Question = require('../models/Question')

module.exports = {
    async  getA(req,res) {
        try{
            const participant = await Participant.find();
            res.json(participant);
        }catch
            (err){
                res.json({message:err});
        }
    },
    async newP (req,res) {
        const participant = new Participant({
            full_name: req.body.full_name,
            phone:req.body.phone,
            age: req.body.age,
            is_valid:req.body.is_valid,
            online: req.body.online,
            password: req.body.password,
        });
        try{
            const saveParticipant = await participant.save();
            res.json(saveParticipant);
        }catch (err){
    res.json({message:err});
        }
        
    },

    async signInpar (req,res) {
       
        const findParticipant = await Participant.findOne({phone:req.body.phone})
        if(findParticipant){

            if(findParticipant.password==req.body.password){
                const token = jwt.sign({_id:findParticipant._id },'privateKey')
                res.status(200).send({
                    participant :findParticipant,
                    token : token
                })
              }else{
                  res.status(401).send('email or pass incorect')
              }
        }else{
            req.send('go to signup page')
        }
    
       
      
    },

    async getpartId (req,res) {
        try{
            const participant = await Post.findById(req.params.particId);
            res.json(participant);
        }catch
            (err){ 
                res.json({message:err});
        }
    },
    async updatepart (req,res) {
        try{
            const updateParticipant= await Participant.updateOne(
                { _id: req.params.particId},
                {$set: {is_valid: req.body.is_valid,online: req.body.online,full_name: req.body.full_name,age: req.body.age},password: req.body.password }
                );
                await sendEmail();
            res.json(updateParticipant);
            
        }catch
         (err){ 
             res.json({message:err});
     }
     },

     async anwser (req,res){
         const token = req.header('x-auth-token')
         const decodeTkon = jwt.verify(token,'privateKey')
         const questionId = req.params.id
         const findQuestion = await Question.findById(questionId)
         if(findQuestion.answer ==req.body.answer){
            console.log('you win ');
            const updatePoint = await Participant.updateOne({_id:decodeTkon._id},{$inc:{points:findQuestion.points}})
         }

         res.send(findQuestion)
     }
}