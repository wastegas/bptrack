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

    $scope.getClass = function(pressure) {
        if(pressure.systolic <= 120 && pressure.diastolic < 80) {
            return 'success';
        } else if(pressure.systolic >= 140 && pressure.systolic <=159 || pressure.diastolic >= 90 && pressure.diastolic <= 99) {
                return 'stage1';
        } else if(pressure.systolic > 120 && pressure.systolic <= 139 || pressure.diastolic >= 80 && pressure.diastolic <= 89) {
                return 'warning';
        } else {
            return 'danger';
        }

        console.log(pressure.systolic);
    };


}
