app.controller('EmployeesController', function($scope, EmployeeFactory){
  EmployeeFactory.fetchAll()
    .then(function(employees){
      $scope.employees = employees;
    });
});
