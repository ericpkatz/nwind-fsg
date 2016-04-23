'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstName: {
        type: String
    }
});


mongoose.model('Employee', schema);
