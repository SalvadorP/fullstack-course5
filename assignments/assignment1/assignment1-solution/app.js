(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']; // Tell the injector the dependencies we are using.
  function LunchCheckController($scope, $filter) {
    $scope.message = "";
    $scope.dishes = "";
    $scope.typeOfMessage = "";
    $scope.borderColor = "";

    $scope.checkLunch = function() {
      $scope.message = "Please enter data first";
      $scope.typeOfMessage = "text-danger";
      $scope.borderColor = "border-red";
      var totalDishes = 0;
      if ($scope.dishes.length > 0) {
        var dishes = $scope.dishes.split(',');
        totalDishes = dishes.length;
        for (var i=0; i < dishes.length; i++) {
          if (dishes[i] == '') {
            totalDishes--;
          }
        }
        totalDishes = totalDishes < 0 ? 0 : totalDishes;
      }

      if (totalDishes > 0 && totalDishes < 4) {
        $scope.message = "Enjoy!";
        $scope.typeOfMessage = "text-success";
        $scope.borderColor = "border-green";
      }
      if (totalDishes >= 4) {
        $scope.message = "Too much!";
      }
    };

  }

})();
