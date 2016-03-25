var ChoicesApp = angular.module('ChoicesApp', [])

ChoicesApp.controller('ChoicesController', function ($scope, ChoicesService) {


    $scope.GenerateReport = function () {
        var report = {
            report_type: $scope.selectedReportType,
            yeartermId: $scope.selectYearTerm,
        };

        ChoicesService.getChoices()
            .success(function (data) {
                $scope.choices = data;
                console.log($scope.choices);
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
                console.log($scope.status);
            });
    }

    $scope.message = "Infrgistics";

});

ChoicesApp.factory('ChoicesService', ['$http', function ($http) {

    var ChoicesService = {};
    ChoicesService.getChoices = function () {
        return $http.get('/Choices/getChoices');
    };
    return ChoicesService;

}]);