
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
      title: 'Express',
   });
};

exports.addPressure = function(pressures) {
    return function(req, res) {
        pressures.push(req.body);
        res.json({ pressures : pressures });
    }
};
