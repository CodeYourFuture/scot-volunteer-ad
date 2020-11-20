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
const createNewAssessment=( topicId, newAssessment)=> {
 
  const query = "INSERT INTO assessments (topic_id, assessment_name) VALUES ($1,$2)";
    
    return pool
        .query(query, [ topicId, newAssessment ])
            };

            const getAllQuestions = (id) => {
                
                return pool.query("select * from questions where assessment_id = $1" ,[id])
                .then((result) => result.rows);
            };
            
  
module.exports = {
    getAllAssessments,
    getAssessmentById,
    createNewAssessment,
    getAllQuestions };

