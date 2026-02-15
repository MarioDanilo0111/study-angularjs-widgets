var app = angular.module("kataApp", []);
app.controller("kataCtrl", function ($scope) {
  $scope.vlans = [
    { label: "Small", cidr: "/25" },
    { label: "Medium", cidr: "/24" },
    { label: "Large", cidr: "/26" },
  ];

  $scope.selectedVlan = undefined;
  $scope.normalizedSize = null;
  $scope.payload = {};

  //Normalize whenever selection changes
  $scope.$watch("selectedVlan", function (val) {
    if (!val) return;

    $scope.normalizedSize = Number(String(val).match(/\d+/)[0]);
  });

  $scope.buildPayload = function () {
    $scope.payload = {
      size: $scope.normalizedSize,
    };
  };
});

console.log("selected: ", $scope.selectedVlan);
console.log("All vlan:", $scope.vlan);

/* 
var app = angular.module("studyApp", []);

app.controller("MainCtrl", function ($scope) {
  //list state
  $scope.items = [{ name: "Alice" }, { name: "Bob" }];

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

  //use input-> "name" value in Html form
  $scope.submit = function () {
    if ($scope.form.name === "") return;

    $scope.result = $scope.form.name;
  };

  $scope.add = function () {
    $scope.message = "Button clicked";
  };
}); */
