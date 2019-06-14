var mongoose = require("mongoose");
var social = new mongoose.Schema({

    applicationNumber : {type: String},

    refernceId: { type: String },
    MCTS: { type: String },
    nameOfInformant: { type: String },
    telephoneNumber: { type: Number },
    familyMembers: { type: Number },
    children: { type: Number },
    caste: { type: String },
    religion: { type: String },
    bplCard: { type: String },

    //B. Treatment Seeking History

    seekCareOutside: { type: String },
    wasIllnessSerious: { type: String },
    moneyNotAvailable: { type: String },
    familyMembersNotAbleAccompany: { type: String },
    badWeather: { type: String },
    didNotKnowAboutInfant: { type: String },
    noHopeForSurvival: { type: String },
    transportNotAvailable: { type: String },
    others: { type: String },

    // 10 Yes," for the question 4, then ASK Where or from whom did you seek care? 

    quack: { type: String },
    traditionalHealer: { type: String },
    subcentre: { type: String },
    phc: { type: String },
    chc: { type: String },
    subDistrictHospital: { type: String },
    districtHospital: { type: String },
    privateAllopathicDoctor: { type: String },
    doctorsAlternateSystem: { type: String },
    reasonForSeekingCare: { type: String },
    ashaAdviceOnHospitalTreatment: { type: String },
    conditionWhenMedical: { type: String },


    // 13.1 and above form 

    Hospital: [{ type: String }],
    problem: [{ type: String }],
    timeTaken: [{ type: String }],
    nil: [{ type: String }],
    firstAid: [{ type: String }],
    otherspecify: [{ type: String }],
    lackOfSpecialists: [{ type: String }],
    lackOfEquipments: [{ type: String }],
    othersreason: [{ type: String }],
    transportModeInGovt: [{ type: String }],
    transportModeInPrivate: [{ type: String }],
    reasonForOtherInstitution: [{ type: String }],
    reasonForOtherInstitutionDecision: [{ type: String }],
    timeTakenForTreatment: [{ type: String }],

    // 13.11 Reasons for the delay in initiating treatment (Use your judgment in arriving the reasons)

    informalPayment: [{ type: String }],
    mobilizingSpecialists: [{ type: String }],
    workersNotAvailable: [{ type: String }],
    patientRush: [{ type: String }],
    doctorNotAvailable: [{ type: String }],
    investigationsNotDone: [{ type: String }],
    otherProblem: [{ type: String }],

    ///14) If the baby was shown as having been discharged against medical advice /absconded

    dischargedAgainstMedicalAdvice: { type: String },
    circumstancesDischargeBaby: { type: String },
    dischargeOnBehalf: { type: String },
    babyDiedBeforeDischarge: { type: String },
    dischargeDueDissatisfactionTreatment: { type: String },
    reasonAgainstdischargedMedicalAdvice: { type: String },

    // 17) Awareness of mother & family members about treatment Seeking

    dangerSignsWhenNewborn: { type: String },
    listItem: [{ type: String }],
    hospitalWhereNewbornTreated: { type: String },
    nameOfFacilities: { type: String },

    treatment: { type: Number },
    transport: { type: Number },
    othersamount: { type: Number },
    total: { type: Number },
    availableSavings: [{ type: String }]

});

module.exports = mongoose.model('social', social);