const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);


const getAllTopics = () => {
    return pool.query("select * from topics")
    .then((result) => result.rows);
};

const getTopicById=(id)=> {

   return pool
    .query("SELECT * FROM topics WHERE topic_name =$1", [id])
    .then((result) => result.rows[0]);
    
   
}
const createNewTopic=( topicId, newTopic)=> {
 
  const query = "INSERT INTO topics (topic_id, topic_name) VALUES ($1,$2)";
    
    return pool
        .query(query, [ topicId, newTopic ])
            };

            const getAllQuestions = (id) => {
                
                return pool.query("select * from questions where topic_name  = $1" ,[id])
                .then((result) => result.rows);
            };
            
  
module.exports = {
    getAllTopics,
    getTopicById,
    createNewTopic,
    getAllQuestions };