const express = require("express");
const router = express.Router();
const assessmentDb = require("../services/database/assessments");

router.get("/", (req, res) => {
	assessmentDb
		.getAllAssessments()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.error(err);
			res.json(500);
		});
});
router.get("/:assessment_id",(req, res)=> {
    const assessmentId =Number(req.params.assessment_id);
  assessmentDb
  .getAssessmentById(assessmentId)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        console.error(err);
        res.json(500);
    });

});
module.exports = router;