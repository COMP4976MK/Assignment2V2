(function () {
    var app = angular.module("choicesViewer", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
          .when("/create", {
              templateUrl: "views/create.html",
              controller: "ChoicesController"
          })
          .when("/register", {
              templateUrl: "views/register.html",
              controller: "ChoicesController"
          })
          .when("/login", {
              templateUrl: "views/login.html",
              controller: "ChoicesController"
          })
            .when("/showAll", {
                templateUrl: "views/showAll.html",
                controller: "ChoicesController"
            })
             .when("/find", {
                 templateUrl: "views/find.html",
                 controller: "ChoicesController"
             })
          .otherwise({ redirectTo: "/showAll" });
    });
}());