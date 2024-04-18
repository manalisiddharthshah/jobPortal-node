const mongoose = require("mongoose");

const applySchema = new mongoose.Schema(
  {
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
    },
    employerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
   },
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
    },
    employerStatus: {
      type: String,
      enum:["notFitApplicant","rejectedApplicant","fitApplicant","messagedApplicants","interviewApplicants","appliedApplicants"],
    },
    employeeStatus: {
      type:String,
      enum:["saved","applied","viewed","interviewed","offers"],
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Apply',applySchema)
