var app = angular.module("studyApp", []);

app.controller("MainCtrl", function ($scope) {
  //list state
  $scope.items = [];
  // Form state
  $scope.newItem = "";
  // Add item
  $scope.addItem = function () {
    if (!$scope.newItem) return;

    $scope.items.push({
      name: $scope.newItem,
    });
    $scope.newItem = "";
  };

  console.log("items: ", $scope.items);

  // Remove item
  $scope.removeItem = function (index) {
    $scope.items.splice(index, 1);
  };

  $scope.message = "Hello AngularJs";

  $scope.form = {
    name: "",
  };

  //use input->"name" value in Html form
  $scope.submit = function () {
    if ($scope.form.name === "") return;

    $scope.result = $scope.form.name;
  };

  $scope.add = function () {
    $scope.message = "Button clicked";
  };
});
