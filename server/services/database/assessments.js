const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);


const getAllAssessments = () => {
    return pool.query("select * from assessments")
    .then((result) => result.rows);
};

const getAssessmentById=(id)=> {

   return pool
    .query("SELECT * FROM assessments WHERE assessment_id=$1", [id])
    .then((result) => result.rows[0]);
    
   
}

const getAllQuestions = () => {
    return pool.query("select * from questions")
    .then((result) => result.rows);
};
  ;
module.exports = {
    getAllAssessments,
    getAssessmentById,
    getAllQuestions,
};