const express = require("express");
const router = express.Router();
const topicDb = require("../services/database/topics");
const passport = require("passport");

router.get("/blocks/:block_id", passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const blockId =Number(req.params.block_id);
		topicDb
			.getAllTopics(blockId)
			.then((data) => {
				res.json(data);
			})
			.catch((err) => {
				console.error(err);
				res.json(500);
			});
	});
router.get("/", passport.authenticate("jwt", { session: false }),
	(req, res) => {
		topicDb
			.getAllTopics()
			.then((data) => {
				res.json(data);
			})
			.catch((err) => {
				console.error(err);
				res.json(500);
			});
	});
router.get("/:topic_id", passport.authenticate("jwt", { session: false }),
	(req, res)=> {

		const topicId =Number(req.params.topic_id);
		topicDb
			.getTopicById(topicId)
			.then((data) => {
				res.json(data);
			})
			.catch(() => {
				res.status(500).json({
					error: "500 Internal Server Error while loading topic page",
				});
			});
	});

router.post("/create", function(req, res) {
	const newTopicName = req.body.topic_name;
	const documentName = req.body.document_name;
	const documentLink = req.body.document_link;
	if(!newTopicName){
		res.status(400).json({
			error: "Could you please enter the topic name",
		  });
	}
	topicDb
		.createNewTopic(newTopicName ,documentName, documentLink )
		.then((data) => res.status(200).json(data))
		.catch(() => {
			res.status(500).json({
				error: "Creating a new topic failed",
			});
		 });
});
router.delete("/:topic_id", function (req, res) {
	const topicId = req.params.topic_id;
	topicDb
		.deleteSelectedTopic(topicId)
		.then((data) => {
			res.json(data);
		})

		.catch(() => {
			res.status(500).json({
				error: "delete selected topic failed ",
			});
		 });

});
router.put("/:topic_id", function (req, res) {

	const topicId = req.params.topic_id;
	const newTopicName = req.body.topic_name;
	const documentName = req.body.document_name;
	const documentLink = req.body.document_link;
	if(!newTopicName){
		res.status(400).json({
			error: "Could you please enter the topic name",
		  });
	}
	topicDb
		.updateTopic( newTopicName, documentName, documentLink,topicId)
		.then((data) => res.status(200).json(data))
		.catch((error) => {
			res.status(500).json({
				error: `500 ${error.message}`,
			});
		 });

});

router.get("/:topic_id/questions", (req, res) => {
	const id = req.params.topic_id;
	topicDb
		.getAllQuestions(id)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.error(err);
			res.json(500);
		});
});
router.get("/:topic_id/questions/:question_id", (req, res) => {

	const topicId = req.params.topic_id;
	const questionId = req.params.question_id;
	topicDb
		.getQuestionById(topicId, questionId )
		.then((data) => {
			res.json(data);
		})
		.catch(() => {
			res.status(500).json({
				error: "500 Internal Server Error",
			});
		 });
});
router.post("/:topic_id/question", (req, res) => {
	const newQuestion = req.body.question_text;
	const id = req.params.topic_id;
	if(!newQuestion){
		res.status(400).json({
			error: "The question can not be empty",
		  });
	}
	topicDb
		.createNewQuestion(id, newQuestion)
		.then((data) => res.status(200).json(data))
		.catch(() => {
			res.status(500).json({
				error: "creating a new question failed",
			});
		 });
});
router.put("/:topic_id/question/:question_id", function (req, res) {
	const newQuestion = req.body.question_text;
	const id = req.params.topic_id;
	const questionId = req.params.question_id;
	if(!newQuestion){
		res.status(400).json({
			error: "The question can not be empty",
		  });
	}
	topicDb
		.updateQuestion( newQuestion,id, questionId)
		.then((data) => res.status(200).json(data))
		.catch(() => {
			res.status(500).json({
				error: "500 Internal Server Error",
			});
		 });
});
router.delete("/:topic_id/questions/:question_id", function (req, res) {
	const topicId = req.params.topic_id;
	const questionId = req.params.question_id;
	topicDb
		.deleteSelectedQuestion(topicId,questionId)
		.then((data) => {
			res.json(data);
		})

		.catch(() => {
			res.status(500).json({
				error: "delete selected question failed ",
			});
		 });

});
module.exports = router;