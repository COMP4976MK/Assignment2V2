// ChoicesService.js

(function () {

    var ChoicesService = function ($http) {

        var baseUrl = 'http://choices.kpatena.me/api/Choices/';

        var _getChoice = function (id) {
            return $http.get(baseUrl + id)
             .then(function (response) {
                 return response.data;
             });
        };

        var _getAllChoices = function () {
            var accesstoken = sessionStorage.getItem('accessToken');

            var authHeaders = {};
            if (accesstoken) {
                authHeaders.Authorization = 'Bearer ' + accesstoken;
            }

            var response = $http({
                url: baseUrl,
                metod: "GET",
                headers: authHeaders
            });
            return response.data;
        };

        var _addChoice = function (data) {
            return $http.post(baseUrl, data)
              .then(function (response) {
                  return response.data;
              });
        };

        var _deleteChoice = function (id) {
            return $http.delete(baseUrl + id)
              .then(function (response) {
                  return response.data;
              });
        };

        var _updateChoice = function (data) {
            return $http.put(baseUrl + data.ChoiceId, data)
              .then(function (response) {
                  return response.data;
              });
        };

        return {
            getChoice: _getChoice,
            getAllChoices: _getAllChoices,
            addChoice: _addChoice,
            deleteChoice: _deleteChoice,
            updateChoice: _updateChoice
        };
    };

    var module = angular.module("choicesViewer");
    module.factory("ChoicesService", ChoicesService);

}());