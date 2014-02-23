var Mongoose = require('mongoose');

exports.PressureSchema = new Mongoose.Schema({
    datetaken : { type : Date, required : true },
    time : { type : String, required : true },
    systolic : { type : Number, required : true },
    diastolic : { type : Number, required : true },
    pulse : { type : Number, required : true }
});
