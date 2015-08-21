angular.module('devldn').config(appRouting);

function appRouting($routeProvider, $locationProvider) {
  //$locationProvider.html5Mode(true);
  $routeProvider.
  when("/", {
    // Can be changed to anything (webpage and controller)
    // templateUrl: "",
    // controller: "",
    title: 'DevLdn - Main Page'
  }).
  otherwise({
    redirectTo: "/"
  });
}
