function BPListController($scope, $http) {
    $scope.pressures = [];

    $scope.newPressure = {
        datetaken: new Date().getTime(),
        timeofday: 'Morning',
        systolic: null,
        diastolic: null,
        pulse: null
    };
    
    $scope.setPressures = function(pressures) {
        $scope.pressures = pressures;
    };

    $scope.addNewPressure = function() {
        $http.post('/pressure.json', $scope.newPressure).success(function(data) {
            if(data.pressure) {
                $scope.pressures.push(data.pressure);
                $scope.newPressure.systolic = null;
                $scope.newPressure.diastolic = null;
                $scope.newPressure.pulse = null;
            } else {
                alert(JSON.stringify(data));
            }
        });
    };

    $scope.timeOptions = [
        { name: 'Morning', value: 'Morning' },
        { name: 'Evening', value: 'Evening' }
    ];

    $scope.pressure = { timeofday : 
        $scope.timeOptions[0].value};

    $scope.selection = function() {
        console.log($scope.pressure);
    };
}
