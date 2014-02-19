function BPListController($scope) {
    $scope.pressures = [];
    
    $scope.setPressures = function(pressures) {
        $scope.pressures = pressures;
    };
}
