const Groupe = require('../models/Groupe');

module.exports = {
    async allGroupe (req,res) {
        try{
            const groupe = await Groupe.find();
            res.json(groupe);
        }catch
            (err){
                res.json({message:err});
        }
    },

    
async newG (req,res) {
    const groupe = new Groupe({
        id_participant:req.body.id_participant,
        group_code:req.body.group_code,
    });
    
        
    try{
        const saveGroupe = await groupe.save();
        res.json(saveGroupe);
    }catch (err){
res.json({message:err});

}

},
async updateG (req,res) {
    const groupe = await Groupe.findById(req.params.groupId);

    console.log(groupe.id_participant.length)
    if (groupe.id_participant.length < 4){
        res.send('welcome to the group')

    }else{
        (groupe.id_participant.length > 4)
        res.send('the group is full ')
    }
    try{

        const updateGroupe= await Groupe.updateOne(
            { _id: req.params.groupId},
            {$set: {id_participant:req.body.id_participant } }
            );
       
        res.json(updateGroupe);
       
    }catch
     (err){ 
         res.json({message:err});
 }
 }
}





