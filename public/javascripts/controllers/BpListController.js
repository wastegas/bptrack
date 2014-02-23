function BPListController($scope, $http) {
    $scope.pressures = [];

    $scope.newPressure = {
        datetaken : new Date().getTime(),
        time : '',
        systolic : 0,
        diastolic : 0,
        pulse : 0
    };
    
    $scope.setPressures = function(pressures) {
        $scope.pressures = pressures;
    };

    $scope.addNewPressure = function() {
        $http.post('/pressure.json', $scope.newPressure).sucess(function(data) {
            if(data.pressure) {
                $scope.pressures.push(data.pressure);
                $scope.newPressure.time = '';
                $scope.newPressure.systolic = 0;
                $scope.newPressure.diastolic = 0;
                $scope.newPressure.pulse = 0;
            } else {
                alert(JSON.stringify(data));
            }
        });
    };

    $scope.timeOptions = [
        { name: 'Morning', value: 'Morning' },
        { name: 'Evening', value: 'Evening' }
    ];

    $scope.select = { time : 
        $scope.timeOptions[0].value};
}
