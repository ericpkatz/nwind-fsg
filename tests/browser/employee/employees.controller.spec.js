describe('EmployeesController', function(){
  var EmployeeFactory, $httpBackend, EmployeeController, $rootScope, $q;
  beforeEach(module('FullstackGeneratedApp'));

  beforeEach(inject(function(_EmployeeFactory_, _$httpBackend_, _$controller_, _$rootScope_, _$q_){
    EmployeeFactory = _EmployeeFactory_;
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    $q = _$q_;
  }));

  it('exists', function(){
    var $scope = $rootScope.$new();
    var employeesController = $controller('EmployeesController', { $scope: $scope }); 
    expect(employeesController).to.be.ok;
  });

  it('scope has employees', function(){
    EmployeeFactory.fetchAll = function(){
      return $q.when([ {}, {}]);
    };
    var $scope = $rootScope.$new();
    var employeesController = $controller('EmployeesController', { $scope: $scope }); 
    $scope.$digest();
    expect($scope.employees).to.be.ok;
    expect($scope.employees.length).to.equal(2);
  });

});
