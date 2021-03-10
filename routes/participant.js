const express = require('express');
const router = express.Router();
const participantController = require('../controllers/participantController');


router.get('/all',participantController.getA);

router.post('/addpartic',participantController.newP);

router.post('/signin',participantController.signInpar);


router.get('/:particId',participantController.getpartId);
router.post('/game/:id',participantController.anwser)





router.patch('/:particId',participantController.updatepart);

module.exports = router;