angular.module("directiveService").controller("lessonCtrl", function($scope){

    $scope.test = "Two-way data binding!";

    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

})
