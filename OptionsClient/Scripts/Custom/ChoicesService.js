// CartoonService.js

(function () {

    var ChoicesService = function ($http) {

        var baseUrl = 'http://flintstones.zift.ca/api/flintstones/';

        var _getChoice = function (id) {
            return $http.get(baseUrl + id)
             .then(function (response) {
                 return response.data;
             });
        };

        var _getAllChoices = function () {
            return $http.get(baseUrl)
              .then(function (response) {
                  return response.data;
              });
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