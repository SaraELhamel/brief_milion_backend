const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const adminController = require('../controllers/adminController');






router.get('/alladmin',adminController.allAdmin);



   
    router.post('/addadmin',adminController.addAdmin);


    router.post('/signinadmin',adminController.signIn);








module.exports = router;