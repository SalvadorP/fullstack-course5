(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
  $scope.counter = 0;

  $scope.upCounter = function () {
    $timeout(function() {
      $scope.counter++;
      console.log("Counter incremented!");
    }, 2000);
  };

  // $scope.upCounter = function () {
  //   setTimeout(function() {
  //     $scope.$apply(function() {
  //       $scope.counter++; // Use apply to invoque functions out of the digest cycle
  //       console.log("Counter Incremented!");
  //     });
  //   }, 2000);
  // };

  // $scope.upCounter = function () {
  //   setTimeout(function() {
  //       $scope.counter++; // we are out of hte digest cycle
  //       console.log("Counter Incremented!");
  //       $scope.$digest(); //call the digest cycle to update values
  //   }, 2000);
  // };
}

})();
