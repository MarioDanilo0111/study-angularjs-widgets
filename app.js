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

  // console.log("selected: ", $scope.selectedVlan);
  // console.log("All vlan:", $scope.vlan);

  // loading a clean state obj
  $scope.state = {
    loading: false,
    // errro: false,
    success: false,
  };

  $scope.items = [];

  //simulating loading async state (like a service call)

  $scope.loadItems = function () {
    $scope.state.loading = true;
    $scope.state.error = false;
    $scope.state.success = false;

    // simulate async call
    setTimeout(function () {
      $scope.$apply(function () {
        $scope.items = [{ name: "Alice" }, { name: "Bob" }];

        $scope.state.loading = false;
        $scope.state.success = true;
        //$scope.state.error = true;
      });
    }, 1000);
    console.log("Loaded items: ", $scope.loadItems());
  };

  $scope.user = { name: "Vale" };

  // $scope.user.name = "Nazareth";

  $scope.settings = {
    theme: {
      color: "blue",
    },
  };

  console.log("color in theme: ", $scope.settings.color);
  console.log("user: ", $scope.user);
});

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
