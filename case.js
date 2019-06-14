//  104 application number
var mongoose = require("mongoose");

var caseSchema = new mongoose.Schema({
    name: { type: String },
    address: { type: String },
    district: { type: String },
    block: { type: String },
    ashaName: { type: String },
    application: { type: Number },
    date: { type: Date },
    started: { type: Boolean },
    anmAssigned: { type: String},
    anm: { type: String },
    moAssigned: { type: String },
    mo: { type: String }
});

module.exports = mongoose.model("Case", caseSchema);