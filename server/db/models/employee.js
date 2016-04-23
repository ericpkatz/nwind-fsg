'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstName: {
        type: String
    }
});

schema.methods.sayHi = function(){
  return 'Hi my name is ' + this.firstName;
};


mongoose.model('Employee', schema);
