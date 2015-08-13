// app.js
(function() {
  var app = angular.module('theEye', ["firebase", "angularMoment"]);
  // Controllers

  app.controller('AgentsController', ['$scope', '$firebase',
    function($scope, $firebase) {
      $scope.agents = $firebase(agentsRef).$asArray();
      $scope.subdomain = account.subdomain;
      // console.dir($scope.agents);
    }
  ]);
  app.controller('TicketsController', ['$scope', '$firebase',
    function($scope, $firebase) {
      $scope.subdomain = account.subdomain;

      var agents = $firebase(agentsRef).$asArray();
      agents.$watch(function(x) {
        // console.dir(agents);
        var ticketArrays = _.map(agents, function(agent) {
          return _.toArray( agent.tickets );
        });
        console.dir(ticketArrays);
        $scope.tickets = _.flatten(ticketArrays);

        console.dir($scope.tickets);
      });
      
    }
  ]);


})();