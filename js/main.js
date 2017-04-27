var app = angular.module('Myapp', ["ngRoute"]);


app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "partials/home.html",
  })
.when("/about", {
  templateUrl: "partials/about.html",
})
.when("/stories", {
  templateUrl: "partials/stories.html"
})
.when("/contact", {
  templateUrl: "partials/contact.html"
});
$locationProvider.html5Mode({enabled: true, requireBase: false});
}]);

// app.controller('navController', ['$scope', '$location', function($scope, $location) {
//   $scope.isActive = function(destination) {
//     return destination === $location.path();
//   }
// }]);
