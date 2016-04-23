app.factory('EmployeeFactory', function($http){
  return {
    fetchAll: function(){
      return $http.get('/api/employees')
        .then(function(response){
          return response.data;
        });
    }
  };
});
