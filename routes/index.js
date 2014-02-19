
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
      title: 'Express',
      pressures : [
        { datetaken : new Date(new Date()),
          timeofday : 'Morning',
          systolic : 133,
          diastolic: 76,
          pulse : 67
        },
        { datetaken : new Date(new Date()),
          timeofday : 'Evening',
          systolic  : 119,
          diastolic : 79,
          pulse : 66
        },
      ]
  });
};
