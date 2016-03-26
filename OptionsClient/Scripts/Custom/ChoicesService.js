// ChoicesService.js

(function () {

    var ChoicesService = function ($http) {

        var baseUrl = 'http://choices.kpatena.me/api/Choices';
        var yearTermUrl = 'http://choices.kpatena.me/api/YearTerms/';
        var optionsUrl = 'http://choices.kpatena.me/api/Options/';

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

            var config = {headers: authHeaders};

            return $http.get(baseUrl, config)
              .then(function (response) {
                  return response.data;
              });

        };

        var _addChoice = function (data) {
            var accesstoken = sessionStorage.getItem('accessToken');

            var authHeaders = {};
            if (accesstoken) {
                authHeaders.Authorization = 'Bearer ' + accesstoken;
            }

            var config = { headers: authHeaders };

            return $http.post(baseUrl, data, config)
              .then(function (response) {
                  return response.data;
              });
        };


        var _getYearTerm = function () {
            return $http.get(yearTermUrl)
              .then(function (response) {
                  return response.data;
              });
        };

        var _getOptions = function () {
            return $http.get(optionsUrl)
              .then(function (response) {
                  return response.data;
              });
        };

        return {
            getChoice: _getChoice,
            getAllChoices: _getAllChoices,
            addChoice: _addChoice,
            getYearTerm: _getYearTerm,
            getOptions: _getOptions
        };
    };

    var module = angular.module("choicesViewer");
    module.factory("ChoicesService", ChoicesService);

}());