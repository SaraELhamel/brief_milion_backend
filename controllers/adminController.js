const Admin = require('../models/Admin');
module.exports = {
    async  allAdmin  (req,res){
        try{
            const admin = await Admin.find();
            res.json(admin);
        }catch
            (err){
                res.json({message:err});
        }
    },
    async addAdmin (req,res) {
        const admin = new Admin({
            full_name: req.body.full_name,
            phone:req.body.phone,
            password: req.body.password,
        });
        try{
            const saveAdmin = await admin.save();
            res.json(saveAdmin);
        }catch (err){
    res.json({message:err});
        }
    },

    async signIn (req,res) {
        const admin = new Admin({
            phone:req.body.phone,
            password: req.body.password,
        });
        try{
            const signinAdmin = await admin.save();
            res.json(signinAdmin);
        }catch (err){
    res.json({message:err});
        }
    }
}