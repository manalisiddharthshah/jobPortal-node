const express = require("express");
const multer = require("multer");

const {employerTokenCheck} = require('../midleware/tokencheck')
const {
  employersignUp,
  employersignIn,
  createJob,
  employerJobPost,
  employerDashboard,
  statusUpdate,
  jobRemoved,
  atsData,
  applyStatusUpdate
} = require("../controller/employercontroller");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/video");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const router = express.Router();
var upload = multer({ storage: storage });

router.post("/signin", employersignIn);
router.post("/signup", employersignUp);
//for creating jobs by employer
router.post("/job",upload.fields([
    { name: "introVideolink", maxCount: 1 },
    { name: "workVideolink", maxCount: 1 },
  ]),
  createJob
);
//all jobs created by employer
router.get('/dashboard',employerTokenCheck,employerDashboard);
//particular job data related to employer's creation
router.post("/job/:jobId",employerJobPost);
//status update api for create jobs
router.put("/status",employerTokenCheck,statusUpdate);
//status update api for apply job
router.put("/employer-status",employerTokenCheck,applyStatusUpdate);
//remove jobs
router.delete("/job/:jobId",employerTokenCheck,jobRemoved);
//ats Data
router.get("/ats/:jobId",employerTokenCheck,atsData);

module.exports = router;