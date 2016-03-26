var ChoicesApp = angular.module('ChoicesApp', [])

ChoicesApp.controller('ChoicesController', function ($scope, ChoicesService) {

    var myPie = null;

    $scope.GenerateReport = function () {
        var report = {
            report_type: $scope.selectedReportType,
            yeartermId: $scope.selectedYearTerm
        };

        ChoicesService.getChoices(report)
            .success(function (data) {
                if (data.type == "Detailed Reports") {
                    $scope.choices = data;
                } else {
                    $scope.choices = data;
                    if (myPie != null) {
                        myPie.destroy();
                    }
                    var pieData = [
                          {
                              value: $scope.choices.dataComm,
                              color: "#F7464A",
                              highlight: "#FF5A5E",
                              label: "Data Communications"
                          },
                          {
                              value: $scope.choices.clientServer,
                              color: "#46BFBD",
                              highlight: "#5AD3D1",
                              label: "Client Server"
                          },
                          {
                              value: $scope.choices.digiPro,
                              color: "#FDB45C",
                              highlight: "#FFC870",
                              label: "Digital Processing"
                          },
                          {
                              value: $scope.choices.infoSys,
                              color: "#949FB1",
                              highlight: "#A8B3C5",
                              label: "Information Systems"
                          },
                          {
                              value: $scope.choices.database,
                              color: "#000080",
                              highlight: "#616774",
                              label: "Database"
                          },
                          {
                              value: $scope.choices.webMobile,
                              color: "#61EA7F",
                              highlight: "#616774",
                              label: "Web & Mobile"
                          },
                          {
                              value: $scope.choices.techPro,
                              color: "#BA5AD4",
                              highlight: "#616774",
                              label: "Tech Pro"
                          }

                    ];
                    $scope.choices = data;
                    var canvas = document.getElementById("chart-area");
                    var ctx = canvas.getContext("2d");
                    myPie = new Chart(ctx).Pie(pieData);
                }
                console.log($scope.choices);
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
                console.log($scope.status);
            });
    }
});

ChoicesApp.factory('ChoicesService', ['$http', function ($http) {

    var ChoicesService = {};
    ChoicesService.getChoices = function (reportInfo) {
        return $http.get('/Choices/getChoices/' + reportInfo.yeartermId + "/" + reportInfo.report_type);
    };
    return ChoicesService;

}]);