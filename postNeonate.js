var mongoose = require("mongoose");

var postNeonate = new mongoose.Schema({
    applicationNumber : {type: String},

    district: {type: String},
    block: { type: String },
    village: { type: String },
    phc: { type: String },
    subCenter: { type: String },
    rch: { type: Number },
    year: { type: Number },
    head: { type: String },
    name: { type: String },
    mother: { type: String },
    firstHys: { type: String },
    secondHys: { type: String },


    respondent: { type: String },
    relationship: { type: String },
    liveWith: { type: String },
    respondentEducation: { type: String },
    category: { type: String },
    religionHead: { type: String },
    sex: { type: String },
    ageDays: {type: String},
    dob: {type: String},
    dod: {type: String},
    address: {
        districtAddress: {type: String},
        locality: {type: String},
        pincode: {type: Number},
        area: {type: String}
     },
    //pin: { type: Number },
    placeDeath: {type: String},
    respondentThink: {type: String},

    // Section 2.0 Child Death

        injury: { type: String },
        kindOfInjury: { type: String },
        firstBreastfed: { type: String },
        otherThanBreastMilk: { type: String },
        breastMilkDuringIllness: { type: String },
        
        fever: { type: String },
        daysFeverLast: { type: Number },
        chillsOrRigorsDuringFever: { type: String },
        convulstionsOrFits: { type: String },
        unconscious: {type: String},
        stiffness: { type: String },
        stiffneck: { type: String },
        diarrhoea: { type: String },
        daysDiarrhoea: { type: Number },
        bloodInStools: { type: String },
        cough: { type: String },
        daysCough: { type: Number },
        bloodInCough: { type: String },
        difficultyBreathing: { type: String },
        daysDifficultyBreathing: { type: Number },
        fastBreathing: { type: String },
        inDrawingChest: { type: String },
        wheezing: { type: String },
        abdominalPainDuringIllness: { type: String },
        abdominalDistention: { type: String },


        vomit: { type: String },
        daysVomit: { type: Number },
        yellowEyesOrSkin: { type: String },
        rashAllOverBody: { type: String },
        redEyes: { type: String },
        measles: { type: String },
        thinWeekPreceedingDeath: { type: String },
        swellingOfHandsFeetOrAbdomenWeekPreceedingDeath: { type: String },
        lackOfBloodWeekPreceedingDeath: { type: String },
        growingNormally: { type: String },
        multipleIllness: { type: String },
        symptomsOfIllness: [{ type: String }],
        bcgInjection: { type: String },
        dpt3Doses: { type: Number },
        polioDrops: { type: String },
        injectionForMeasles: { type: String },
        symptomstype: {type: String},
    //interviewerName: { type: String },
    //code: { type: String },
    //date: { day: {type: Number}, month:{ type: Number}, year:{ type: Number} }
});

module.exports = mongoose.model('postNeonate', postNeonate);