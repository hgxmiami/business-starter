var app = angular.module('tutorialWebApp', [
  'ngRoute'
  
]);

/**
* Configure the Routes
*/

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider)  {
    $locationProvider.html5Mode(true); 
  $routeProvider
  // Home
  .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  //Pages
  .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
  .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
  .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
  .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
  .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
  .when("/blog", {templateUrl: "partials/blog.html", controller: "PageCtrl"})
  .when("/blog-post", {templateUrl: "partials/blog-post.html", controller: "PageCtrl"})
  .when("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
  
}]);

app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
  
});

app.controller('PageCtrl', function (/* $scope, $location, $http */ ) {
  console.log("Page Controller reporting for duty.");

  //Activate the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

});
