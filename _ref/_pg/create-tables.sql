-- psql
CREATE TABLE post (
	id BIGSERIAL NOT NULL PRIMARY KEY, 
	title VARCHAR(100) NOT NULL, 
	date_posted TIMESTAMP NOT NULL, 
	content TEXT NOT NULL, 
	user_id BIGINT NOT NULL REFERENCES public.user 
)
;
 -- user
CREATE TABLE "user" (
  "id"	BIGSERIAL NOT NULL PRIMARY KEY,
  "username"	VARCHAR(20) NOT NULL UNIQUE,
  "email"	VARCHAR(120) NOT NULL UNIQUE,
  "image_file"	VARCHAR(255) NOT NULL,
  "password"	VARCHAR(255) NOT NULL,
  "imp_pts"	INTEGER,
  "urg_pts"	INTEGER,
  "total_pts"	INTEGER,
  "imp_perc"	INTEGER,
  "urg_perc"	INTEGER,
  "avatar_img"	TEXT,
  "avatar_mode"	TEXT
);
