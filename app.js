var app = angular.module("studyApp", []);

app.controller("MainCtrl", function ($scope) {
  $scope.message = "Hello AngularJs";

  $scope.form = {
    name: "",
  };

  //use input->"name" value in Html form
  $scope.submit = function () {
    if ($scope.form.name) {
      $scope.result = "Hello " + $scope.form.name;
    }
  };

  $scope.add = function () {
    $scope.message = "Button clicked";
  };
});
