// app.js
(function() {
  var app = angular.module('theEye', ["firebase", "angularMoment"]);
      // #### Firebase
  // var url = "https://theeyeofzen.firebaseio.com/accounts/appsonappsonapps/agents",
  //     agentsRef = new Firebase( url );
  

  // Controllers

  app.controller('AgentsController', ['$scope', '$firebase',
    function($scope, $firebase) {
      $scope.agents = $firebase(agentsRef).$asArray();
      $scope.subdomain = account.subdomain;
      console.dir($scope.agents);

    }
  ]);
})();