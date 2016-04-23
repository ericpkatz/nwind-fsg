var dbURI = 'mongodb://localhost:27017/testingDB';
var clearDB = require('mocha-mongoose')(dbURI);

var sinon = require('sinon');
var expect = require('chai').expect;
var mongoose = require('mongoose');

// Require in all models.
require('../../../server/db/models');

var Employee = mongoose.model('Employee');

describe('Employee model', function () {

    beforeEach('Establish DB connection', function (done) {
        if (mongoose.connection.db) return done();
        mongoose.connect(dbURI, done);
    });

    afterEach('Clear test database', function (done) {
        clearDB(done);
    });

    it('should exist', function () {
        expect(Employee).to.be.a('function');
    });

    describe('creating an employee named moe', function(){
      var employee;
      beforeEach(function(done){
        Employee.create({ firstName: 'Moe' })
          .then(function(_employee){
            employee = _employee;
            done();
          });
      });

      it('his name is moe', function(){
        expect(employee.firstName).to.equal('Moe');
      }); 
    });

});
