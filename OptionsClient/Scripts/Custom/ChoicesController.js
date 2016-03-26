// Code goes here

(function () {

    var app = angular.module("choicesViewer");

    var ChoicesController = function ($scope, $location, ChoicesService) {

        var _choice = {
            YearTermId: "",
            StudentId: "",
            StudentFirstName: "",
            StudentLastName: "",
            FirstChoiceOptionId: "",
            SecondChoiceOptionId: "",
            ThirdChoiceOptionId: "",
            FourthChoiceOptionId: ""
        };


        var onAddComplete = function (data) {
            $scope.newChoice = data;

            _choice.YearTermId = "";
            _choice.StudentId = "";
            _choice.StudentFirstName = "";
            _choice.StudentLastName = "";
            _choice.FirstChoiceOptionId = "";
            _choice.SecondChoiceOptionId = "";
            _choice.ThirdChoiceOptionId = "";
            _choice.FourthChoiceOptionId = "";

            $scope.choiceSubmitted = "Choice submitted!";
            $scope.userFirstName = "";
            $scope.userLastName = "";
            $scope.firstOptionId = "";
            $scope.secondOptionId = "";
            $scope.thirdOptionId = "";
            $scope.fourthOptionId = "";

        };

        var onAddError = function (reason) {
            $scope.errorEntered = reason.data.Message;
        };

        $scope.addChoice = function () {
            var errorVal = 0;
            var data = {
                YearTermId: $scope.userTermId,
                StudentId: $scope.userStudentId,
                StudentFirstName: $scope.userFirstName,
                StudentLastName: $scope.userLastName,
                FirstChoiceOptionId: $scope.firstOptionId,
                SecondChoiceOptionId: $scope.secondOptionId,
                ThirdChoiceOptionId: $scope.thirdOptionId,
                FourthChoiceOptionId: $scope.fourthOptionId
            }

            if ($scope.userFirstName == "" && $scope.userLastName == "" && $scope.firstOptionId == ""
                && $scope.secondOptionId == "" && $scope.thirdOptionId == "" && $scope.fourthOptionId == "") {
                errorVal = 1;
                $scope.errorMissing = "Error: some fields are missing.";
            }

            if (($scope.firstOptionId != $scope.secondOptionId && $scope.firstOptionId != $scope.thirdOptionId
                && $scope.fourthOptionId) && ($scope.secondOptionId != $scope.thirdOptionId && $scope.secondOptionId != $scope.fourthOptionId)
                && ($scope.thirdOptionId != $scope.fourthOptionId)) {
                var allgood = 0;
            } else {
                errorVal = 1;
                $scope.errorDifferent = "Error: Choices need to be different.";
            }
            if (errorVal == 0) {
                ChoicesService.addChoice(data)
                .then(onAddComplete, onAddError);
            } else {
                $scope.OverallError = "Error: Invalid Choice Submission."
            }
            
        };


        $scope.init = function () {
            ChoicesService.getYearTerm()
            .then(onGetYearTerm, onGetYearTermError);
        };

        var onGetYearTerm = function (data) {
            $scope.yearterm = data;
            switch (data.Term) {
                case 10:
                    $scope.term = "Winter";
                    break;
                case 20:
                    $scope.term = "Spring/Summer";
                    break;
                case 30:
                    $scope.term = "Fall";
                    break;
            }
            $scope.userStudentId = sessionStorage.getItem('userName');
            $scope.userTermId = data.YearTermId;
            ChoicesService.getOptions()
            .then(onGetOptions, onGetOptionsError);
        };

        var onGetYearTermError = function (reason) {
            $scope.error = "Could not get year and term";
        };

        var onGetOptions = function (data) {
            $scope.options = data;
        };

        var onGetOptionsError = function (reason) {
            $scope.error = "Could not get options.";
        };

        $scope.logout = function () {

            sessionStorage.removeItem('accessToken');
            window.location.href = '#/login';
        };
    };

    app.controller("ChoicesController", ChoicesController);
}());