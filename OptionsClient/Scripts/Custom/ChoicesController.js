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

        var onGetAllComplete = function (data) {
            $scope.choices = data;
        };

        var onGetAllError = function (reason) {
            $scope.error = "Could not get all choices.";
        };

        $scope.search = function () {
            ChoicesService.getAllChoices()
              .then(onGetAllComplete, onGetAllError);
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

        };

        var onAddError = function (reason) {
            $scope.error = "Could not add a choice.";
        };

        $scope.addChoice = function () {
            var data = {
                YearTermId: $scope.choice.YearTermId,
                StudentId: $scope.choice.StudentId,
                StudentFirstName: $scope.choice.StudentFirstName,
                StudentLastName: $scope.choice.StudentLastName,
                FirstChoiceOptionId: $scope.choice.FirstChoiceOptionId,
                SecondChoiceOptionId: $scope.choice.SecondChoiceOptionId,
                ThirdChoiceOptionId: $scope.choice.ThirdChoiceOptionId,
                FourthChoiceOptionId: $scope.choice.FourthChoiceOptionId
            }
            ChoicesService.addChoice(data)
            .then(onAddComplete, onAddError);
        };

        var onFindComplete = function (data) {
            $scope.choice = data;
        };

        var onFindError = function (reason) {
            $scope.error = "Could not find a cartoon character.";
        };

        $scope.findChoice = function (choiceId) {
            ChoicesService.getChoice(choiceId)
            .then(onFindComplete, onFindError);
        };

    };

    app.controller("ChoicesController", ChoicesController);
}());