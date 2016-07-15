CREATE TABLE IF NOT EXISTS user (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  url TEXT,
  facebookId TEXT 
);

CREATE TABLE IF NOT EXISTS type (
  id SERIAL PRIMARY KEY,
  genre VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS challenge (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  url TEXT,
  creatorId INTEGER,
  typeId INTEGER,
  CONSTRAINT challenge_creator_fk FOREIGN KEY creatorId REFERENCES user (id),
  CONSTRAINT challenge_type_fk FOREIGN KEY typeId REFERENCES type (id) 
)
 
CREATE TABLE IF NOT EXISTS user_challenge (
  id SERIAL PRIMARY KEY,
  userId INTEGER,
  challengeId INTEGER
  CONSTRAINT join_user_fk FOREIGN KEY userId REFERENCES user (id),
  CONSTRAINT join_challenge_fk FOREIGN KEY challengeId REFERENCES challenge (id) 
);

CREATE TABLE IF NOT EXISTS proof (
  id SERIAL PRIMARY KEY,
  userChallengeId INTEGER,
  CONSTRAINT userChallenge_fk FOREIGN KEY userChallengeId REFERENCES user_challenge (id)
);
