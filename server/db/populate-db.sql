-- Users seed data
-- Note: Do NOT add passwords you use in real life. Passwords are now saved as clear text. This is very bad from security point of view. We will have a task to encrypt the passwords
INSERT INTO users (email, password) values ('admin@cyf.org', 'admin_password');
INSERT INTO users (email, password) values ('user@cyf.org', 'user_password');

INSERT INTO blocks (block_name) VALUES( 'Language skills');
INSERT INTO blocks (block_name) VALUES( 'Programming skills');



INSERT INTO topics ( topic_name, document_name, document_link, block_id) VALUES('eginners English', 'Beginners English', 'www.google.com', 1);
INSERT INTO topics ( topic_name, document_name, document_link, block_id) VALUES('javaScript ', 'javaScript', 'www.javaScript.com', 2);


INSERT INTO volunteers ( email) VALUES('Volunteer1@email.com');
INSERT INTO volunteers ( email) VALUES('John@mail.com');


INSERT INTO volunteer_Blocks ( volunteer_id,block_id) VALUES(1, 1);
INSERT INTO volunteer_Blocks ( volunteer_id,block_id) VALUES(1, 2);
INSERT INTO volunteer_Blocks ( volunteer_id,block_id) VALUES(2, 1);
INSERT INTO volunteer_Blocks ( volunteer_id,block_id) VALUES(2, 2);


INSERT INTO questions (topic_id, question_text) VALUES(1, 'What are the types of past tense?');
INSERT INTO questions (topic_id, question_text) VALUES(2, 'What are the types of present continues?');





INSERT INTO volunteer_answers (volunteer_block_id, question_id, answer) VALUES(1, 1, 'Past simple, past continus');
INSERT INTO volunteer_answers (volunteer_block_id, question_id, answer) VALUES(2,1 , 'Simple Past Tense.Past Continuous Tense.
Past Perfect Tense.
Past Perfect Continuous Tense.
');









 
