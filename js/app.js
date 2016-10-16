(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LCController);
LCController.$inject = ['$scope'];
function LCController($scope) {
    $scope.text = '';
    $scope.message = '';
    var separator = ',';
    
    $scope.check = function() {
        if ($scope.text === "") {
            $scope.message = 'Please enter data first';
            return;
        }
        var size = $scope.getSize($scope.text,separator);
            
        if (size < 4)
            $scope.message = 'Enjoy!';
        else
            $scope.message = 'Too much!';
    }
    
    $scope.getSize = function(text,separator) {
        var array = text.split(separator);
        return array.length;
    }
};

    
})();