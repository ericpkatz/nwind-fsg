describe('AboutController', function(){
  var $controller, $rootScope;

  beforeEach(module('FullstackGeneratedApp'));

  beforeEach(inject(function(_$controller_, _$rootScope_){
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  
  }));
  it('it exists', function(){
    var $scope = $rootScope.$new();
    var aboutController = $controller('AboutController', { $scope: $scope });
    expect(aboutController).to.be.ok;
  });

  it('scope has images', function(){
    var $scope = $rootScope.$new();
    var aboutController = $controller('AboutController', { $scope: $scope });
    expect($scope.images.length).to.equal(26);
  });
});
