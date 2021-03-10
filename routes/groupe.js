const express = require('express');
const router = express.Router();
const Groupe = require('../models/Groupe');
const groupeController = require('../controllers/groupeController');



router.get('/allG',groupeController.allGroupe);

router.post('/addgroup',groupeController.newG);


    router.patch('/:groupId',groupeController.updateG);


module.exports = router;