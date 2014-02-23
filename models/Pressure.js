var Mongoose = require('mongoose');

exports.PressureSchema = new Mongoose.Schema({
    datetaken : { type : Date, required : true },
    timeofday : { type : String, 
                default : 'Morning', 
                enum : ['Morning', 'Evening']},
    systolic : { type : Number, required : true },
    diastolic : { type : Number, required : true },
    pulse : { type : Number, required : true }
});
