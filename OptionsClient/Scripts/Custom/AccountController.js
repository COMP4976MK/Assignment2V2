// Code goes here

(function () {

    var app = angular.module("choicesViewer");
    
    var AccountController = function ($scope, $location, AccountService) {
        
        //Scope Declaration
        $scope.responseData = "";

        $scope.userName = "";

        $scope.userRegistrationUsername
        $scope.userRegistrationEmail = "";
        $scope.userRegistrationPassword = "";
        $scope.userRegistrationConfirmPassword = "";

        $scope.userLoginEmail = "";
        $scope.userLoginPassword = "";

        $scope.accessToken = "";
        $scope.refreshToken = "";

        $scope.submit = function(isValid) {
            console.log("h");
            if (isValid) {
                $scope.message = "Submitted " + $scope.userRegistrationInfo.userRegistrationUsername;
            } else {
                $scope.message = "There are still invalid fields below";
            }
        };

    

        $scope.registerUser = function () {

            $scope.responseData = "";

            //The User Registration Information
            var userRegistrationInfo = {
                Username: $scope.userRegistrationUsername,
                Email: $scope.userRegistrationEmail,
                Password: $scope.userRegistrationPassword,
                ConfirmPassword: $scope.userRegistrationConfirmPassword
            };

            var promiseregister = AccountService.register(userRegistrationInfo);

            promiseregister.then(function (resp) {
                $scope.responseData = "User Successfully Registered";
                $scope.userRegistrationUsername = "";
                $scope.userRegistrationEmail = "";
                $scope.userRegistrationPassword = "";
                $scope.userRegistrationConfirmPassword = "";
                window.location.href = '#/login';
            }, function (err) {
                if ($scope.userRegistrationPassword != $scope.userRegistrationConfirmPassword) {
                    $scope.passwordError = "Error: Passwords don't match";
                }
                $scope.responseData = "Error: Incorrect Fields. Invalid Registration.";
            });
        };

        $scope.redirect = function () {
            window.location.href = '#/addChoice';
        };

        //Function to Login. This will generate Token 
        $scope.login = function () {
            //This is the information to pass for token based authentication
            var userLogin = {
                grant_type: 'password',
                username: $scope.userLoginUserName,
                password: $scope.userLoginPassword
            };

            var promiselogin = AccountService.login(userLogin);

            promiselogin.then(function (resp) {

                $scope.userName = resp.data.userName;
                //Store the token information in the SessionStorage
                //So that it can be accessed for other views
                sessionStorage.setItem('userName', resp.data.userName);
                sessionStorage.setItem('accessToken', resp.data.access_token);
                sessionStorage.setItem('refreshToken', resp.data.refresh_token);
                window.location.href = '#/addChoice';
            }, function (err) {

                $scope.responseData = "Error: Invalid login attempt";
            });

        };
    };
   
    var compareTo = function () {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function (scope, element, attributes, ngModel) {

                ngModel.$validators.compareTo = function (modelValue) {
                    return modelValue == scope.otherModelValue;
                };

                scope.$watch("otherModelValue", function () {
                    ngModel.$validate();
                });
            }
        };
    };

    app.controller("AccountController", AccountController);

}());