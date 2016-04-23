describe('EmployeeFactory', function(){
  var EmployeeFactory, $httpBackend;
  beforeEach(module('FullstackGeneratedApp'));

  beforeEach(inject(function(_EmployeeFactory_, _$httpBackend_){
    EmployeeFactory = _EmployeeFactory_;
    $httpBackend = _$httpBackend_;
  }));

  it('exists', function(){
    expect(EmployeeFactory).to.be.ok;
  });

  describe('fetchAll', function(){
    it('calls GET /api/employees', function(){
      var employees;
      $httpBackend.expectGET('/api/employees')
        .respond([ {}, {} ]);
      EmployeeFactory.fetchAll()
        .then(function(_employees){
          employees = _employees;
        });
      $httpBackend.flush();
      expect(employees.length).to.equal(2);
    });
  });
});
