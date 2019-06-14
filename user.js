var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String, unique: true },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    email: { type: String },
    mobile: { type: Number },
    role: { type: String }, // ANM, MO or BMO
    district: { type: String },
    block: { type: String },
    gender: { type: String },
    age: { type: Number },
    next_appl: { type: Number, default: 0 },
    next_name: { type: String, default: 'none' },
    next_address: { type: String, default: 'none' },
    authToken: { type: String }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);