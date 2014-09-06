var app = angular.module("mySpa" , ['ngRoute' , 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider.when("/", { templateUrl: "/partials/home.html" }).
                   when("/profile", { controller : 'profileCtrl' , templateUrl: "/partials/profile.html" }).
                   when("/contact", { templateUrl: "/partials/contact.html" }).
                   otherwise({ redirectTo: '/' });
});
