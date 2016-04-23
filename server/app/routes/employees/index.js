'use strict';
var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

var ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).end();
    }
};

router.get('/', ensureAuthenticated, function (req, res) {
  Employee.find()
    .then(function(employees){
      res.send(employees);
    });
});
