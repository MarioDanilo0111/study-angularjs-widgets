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

  // console.log("color in theme: ", $scope.settings.color);
  // console.log("user: ", $scope.user);

  $scope.servers = [
    {
      name: "Linux Web 1",
      specs: {
        cpu: 8,
        ram: 11,
      },
    },
    {
      name: "Linux Web 2",
      // specs: {
      //   cpu: 6,
      //   ram: 13,
      // },
    },
    {
      name: "Database Server",
      specs: {
        cpu: 16,
        // ram: 9,
      },
    },
  ];

  $scope.secondServer = [
    {
      specs: {
        cpu: 9,
      },
    },
  ];
  $scope.thirdServer = [{ name: "A" }];

  // this evaluation will fail
  // if($scope.thirdServer[0].specs.cpu){
  //   console.log("this will fail")
  // }

  // if statement need to check each step,
  // if one fails the if exits
  if (
    $scope.thirdServer[0] &&
    $scope.thirdServer[0].specs &&
    $scope.thirdServer[0].specs.cpu
  ) {
    console.log(
      "This wont fails since it's returning fals and exits if one of the statements is false",
    );
  }

  var secondAttempt = $scope.secondServer[0].specs.cpu;
  console.log("the second Attempt: ", secondAttempt);

  if ($scope.thirdServer[0].specs) {
    console.log("The name there: ");
  }

  // duble checks escential if you are diving deeper in the obj
  // protection in deeper access
  if ($scope.thirdServer[0] && $scope.thirdServer[0].specs) {
    console.log($scope.thirdServer[0].specs.cpu);
  }

  // 'if' to evaluate if first case is true than continue
  // if case a is not true than do not proced
  if ($scope.secondServer[0] && $scope.secondServer[0].specs) {
    console.log("get throw specific id: ", $scope.secondServer[0].specs.cpu);
  }

  $scope.servers.forEach(function (server) {
    var cpu = server.specs && server.specs.cpu;
    var ram = server.specs && server.specs.ram;
    console.log("Server CPU: ", cpu);
    console.log("Server Ram: ", ram);
  });
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
