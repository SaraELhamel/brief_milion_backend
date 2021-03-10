const mongoose = require('mongoose');

const GroupeSchema = mongoose.Schema({

    id_participant : {
        type:[ mongoose.Schema.Types.ObjectId],
        ref: 'participant'
    },
    group_code:{
        type:Number
    }

});

module.exports = mongoose.model('Groupe', GroupeSchema);