var mongoose = require("mongoose");

var FbiSchema = new mongoose.Schema({

    applicationNumber: { type: String },
    // User reference
    filledBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    //Background Information
    name: { type: String },
    age: {
        years: { type: Number },
        months: { type: Number },
        days: { type: Number }
    },
    sex: { type: String },
    address: {
        pincode: { type: Number },
        district: { type: String },
        block: { type: String },
        locality: { type: String },
        area: { type: String },
    },
    orderOfBirth: { type: String },
    caste: { type: String },
    immunization: { type: [String] },
    bplCard: { type: String },
    weight: { type: Number },
    growthCurve: { type: String },
    pastIllness: { type: String },
    //natureOfIllness: { type: String },

    // Symptoms during Illness
    inabilityToFeed: { type: Number },
    fever: { type: Number },
    looseStools: { type: Number },
    vomiting: { type: Number },
    fastBreathing: { type: Number },
    convulsions: { type: Number },
    appearanceOfSkinRashes: { type: Number },
    injury: { type: Number },
    otherSymptom: { type: String },

    // Details of treatment
    treatmentTaken: { type: String },
    treatmentLocation: { type: [String] },

    Probable: { type: String },
    disease: { type: [String] },

    // According to the respondent, cause of death
    causeOfDeath: { type: String },

    // Occurence of delay
    delay: { type: [String] },

    // Advice according to analysis
    advice: { type: String }
});

module.exports = mongoose.model("Fbi", FbiSchema);
