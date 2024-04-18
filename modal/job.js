const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EmployerUser",
    },
    whyJoinUs: {
      type: String,
      default: "",
    },
    workVideolink: {
      type: String,
      default: "",
    },
    companyName: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "",
    },
    remote: {
      type: String,
      default: "",
    },
    jobLocation: {
      type: String,
      default: "",
    },
    employmentType: {
      type: String,
      default: "",
    },
    compensationRange: {
      type: String,
      default: "",
    },
    introVideolink: {
      type: String,
      default: "",
    },
    positionDescription: {
      type: String,
      default: "",
    },
    qualifications: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["register", "step1", "step2", "step3", "completed"],
    },
    application: {
      type: String,
      default: "",
    },
    questionlist: {
      type: String,
      default: "",
    },
    externalWebsite: {
      type: String,
      default: "",
    },
    jobStatus:{
      type:String,
      enum: ["open", "closed"],
      default:"open"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
