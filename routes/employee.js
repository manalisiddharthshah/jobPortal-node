const express = require("express");
const {
  employeesignUp,
  employeesignIn,
  employeeProfile,
  employeeInfo,
  applyNow,
  companyJobList,
  jobDetail,
  companyList,
  jobList,
  applyStatusUpdate,
  atsData
} = require("../controller/employeecontroller");
const {employeeTokenCheck} = require('../midleware/tokencheck')

const router = express.Router();

router.post("/signup", employeesignUp);
router.post("/signin", employeesignIn);
//employee profile create
router.post("/profile",employeeProfile);
//employee info
router.get("/info",employeeTokenCheck,employeeInfo);
//apply now
router.post("/apply",employeeTokenCheck,applyNow);
//job list
router.get("/jobs",employeeTokenCheck,jobList);
//company list
router.get("/company",employeeTokenCheck,companyList);
//job details by id
router.get("/job-detail/:jobId",employeeTokenCheck,jobDetail);
//status update api for apply job
router.put("/employee-status",employeeTokenCheck,applyStatusUpdate);
//job details with their respective company data
router.get("/company-jobs/:userId",employeeTokenCheck,companyJobList);
router.get("/ats",employeeTokenCheck,atsData);

module.exports = router