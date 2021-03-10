const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
// const jwt = require('jsonwebtoken');

require('dotenv/config');

app.use(bodyParser.json());
const participantRoute = require('./routes/participant');
app.use('/participant', participantRoute);

const adminRoute = require('./routes/admin');
app.use('/admin', adminRoute);

const questionRoute = require('./routes/question');
app.use('/question', questionRoute);


const groupeRoute = require('./routes/groupe');
app.use('/groupe', groupeRoute);

// const groupeRound = require('./routes/round');
//app.use('/round', roundRoute);
const question_tokenRoute = require('./routes/question_token');
app.use('/question_token', question_tokenRoute);


mongoose.connect('mongodb://localhost/brief_milion', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(console.log('connected'))
.catch(err=>{
  console.log(err);
})

app.listen(3000);