(function () {
    var app = angular.module("choicesViewer", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
          .when("/addChoice", {
              templateUrl: "views/create.html",
              controller: "ChoicesController"
          })
          .when("/register", {
              templateUrl: "views/register.html",
              controller: "AccountController"
          })
          .when("/login", {
              templateUrl: "views/login.html",
              controller: "AccountController"
          })
            .when("/showAll", {
                templateUrl: "views/showAll.html",
                controller: "ChoicesController"
            })
             .when("/find", {
                 templateUrl: "views/find.html",
                 controller: "ChoicesController"
             })
          .otherwise({ redirectTo: "/login" });
    });
}());