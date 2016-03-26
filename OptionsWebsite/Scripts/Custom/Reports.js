var ChoicesApp = angular.module('ChoicesApp', [])

ChoicesApp.controller('ChoicesController', function ($scope, ChoicesService) {

    var myPie = null;

    $scope.init = function () {
        ChoicesService.getYearTerms()
           .success(function (data) {
               $scope.options = data;
               $scope.selectedYearTerm = $scope.options.yearterms[3];
               $scope.selectedReportType = $scope.options.reports[0];
               console.log($scope.options);
           })
           .error(function (error) {
               $scope.status = 'Unable to load customer data: ' + error.message;
               console.log($scope.status);
           });
    }

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
                    var options = {
                        segmentShowStroke: false,
                        animateRotate: true,
                        animateScale: false,
                        tooltipTemplate: "<%= label %>: <%= value %>%"
                    }
                    var totalChoices = data.dataComm + data.clientServer + data.digiPro + data.infoSys + data.database + data.webMobile + data.techPro;
                    var dataCommPercent = (data.dataComm / totalChoices) * 100;
                    var clientServerPercent = (data.clientServer / totalChoices) * 100;
                    var digiProPercent = (data.digiPro / totalChoices) * 100;
                    var infoSysPercent = (data.infoSys / totalChoices) * 100;
                    var databasePercent = (data.database / totalChoices) * 100;
                    var webMobilePercent = (data.webMobile / totalChoices) * 100;
                    var techProPercent = (data.techPro / totalChoices) * 100;

                    var pieData = [
                          {
                              value: dataCommPercent,
                              color: "#F7464A",
                              highlight: "#FF5A5E",
                              label: "Data Communications"
                          },
                          {
                              value: clientServerPercent,
                              color: "#46BFBD",
                              highlight: "#5AD3D1",
                              label: "Client Server"
                          },
                          {
                              value: digiProPercent,
                              color: "#FDB45C",
                              highlight: "#FFC870",
                              label: "Digital Processing"
                          },
                          {
                              value: infoSysPercent,
                              color: "#949FB1",
                              highlight: "#A8B3C5",
                              label: "Information Systems"
                          },
                          {
                              value: databasePercent,
                              color: "#000080",
                              highlight: "#616774",
                              label: "Database"
                          },
                          {
                              value: webMobilePercent,
                              color: "#61EA7F",
                              highlight: "#616774",
                              label: "Web & Mobile"
                          },
                          {
                              value: techProPercent,
                              color: "#BA5AD4",
                              highlight: "#616774",
                              label: "Tech Pro"
                          }

                    ];
                    $scope.choices = data;
                    var canvas = document.getElementById("chart-area");
                    var ctx = canvas.getContext("2d");
                    myPie = new Chart(ctx).Pie(pieData, options);
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

    ChoicesService.getYearTerms = function () {
        return $http.get('/Choices/getYearTerms');
    };

    return ChoicesService;

}]);