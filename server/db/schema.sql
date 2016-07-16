CREATE TABLE IF NOT EXISTS user (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  url TEXT,
  facebookId TEXT,
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT now() 
);

CREATE TABLE IF NOT EXISTS category (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS challenge (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  url TEXT,
  challengers INTEGER,
  successes INTEGER,
  creatorId INTEGER,
  categoryId INTEGER,
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT now(),
  endTime TIMESTAMP WITH TIME ZONE,
  CONSTRAINT challenge_creator_fk FOREIGN KEY creatorId REFERENCES user (id),
  CONSTRAINT challenge_type_fk FOREIGN KEY typeId REFERENCES type (id) 
)
 
CREATE TABLE IF NOT EXISTS user_challenge (
  id SERIAL PRIMARY KEY,
  userId INTEGER,
  challengeId INTEGER,
  timeAccepted TIMESTAMP WITH TIME ZONE DEFAULT now(),
  CONSTRAINT join_user_fk FOREIGN KEY userId REFERENCES user (id),
  CONSTRAINT join_challenge_fk FOREIGN KEY challengeId REFERENCES challenge (id) 
);

CREATE TABLE IF NOT EXISTS proof (
  id SERIAL PRIMARY KEY,
  userChallengeId INTEGER,
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT now(),
  creatorAccepted BOOLEAN,
  CONSTRAINT userChallenge_fk FOREIGN KEY userChallengeId REFERENCES user_challenge (id)
);
