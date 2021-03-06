
/*
 * GET home page.
 */

exports.index = function (Pressure) {
    return function (req, res) {
        Pressure.find({}, function (error, pressures) {
            res.render('index', {
                title: 'Blood Pressure Tracker',
                pressures : pressures
            });
        })
    }
};

exports.addPressure = function (Pressure) {
    return function (req, res) {
        var pressure = new Pressure(req.body);
        pressure.save(function (error, pressure) {
            if(error || !pressure) {
                res.json({ error : error });
            } else {
                res.json({ pressure : pressure });
            }
        })
    }
};
