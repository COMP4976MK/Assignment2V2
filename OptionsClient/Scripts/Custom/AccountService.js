//AccountService.js

(function () {

    var AccountService = function ($http) {

        var baseUrl = 'http://choices.kpatena.me';

        var _register = function (userInfo) {
            var resp = $http({
                url: baseUrl + "/api/Account/Register",
                method: "POST",
                data: userInfo,
            });
            return resp;
        };

        var _login = function (userlogin) {
            var resp = $http({
                url: baseUrl + "/TOKEN",
                method: "POST",
                data: $.param({ grant_type: 'password', username: userlogin.username, password: userlogin.password }),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            });
            return resp;
        };

        return {
            login: _login,
            register: _register,
        };
    };

    var module = angular.module("choicesViewer");
    module.factory("AccountService", AccountService);

}());