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

CREATE TABLE "player" (
  "id"	BIGSERIAL NOT NULL PRIMARY KEY,
  "player_name" VARCHAR(32),
	"avatar_url" VARCHAR(255),
  "avlb_funds" INTEGER,
  "high_worth" INTEGER,
  "low_worth" INTEGER,
  "rtn_on_inv" INTEGER,
  "num_of_inv" INTEGER
);

DROP TABLE public.purchased  CASCADE;
DROP TABLE public.spawn  CASCADE;
CREATE TABLE "purchased" (
  "id"	BIGSERIAL NOT NULL PRIMARY KEY,
	"BasePriceLabel"	VARCHAR(255),
	"BedrmCt"	INTEGER,
	"CountyName"	VARCHAR(255),
	"Metro"	VARCHAR(255),
	"RegionID"	INTEGER,
	"RegionName"	VARCHAR(255),
	"SizeRank"	INTEGER,
	"State"	VARCHAR(255),
	"StateName"	VARCHAR(255),
	"img_url"	VARCHAR(255),
	"base_price"	INTEGER,
	"base_price01"	INTEGER,
	"base_price02"	INTEGER,
	"base_price03"	INTEGER,
	"purchase_price"	INTEGER,
	"purchase_round"	INTEGER,
	"forsale_price"	INTEGER,
	"forsale_round"	INTEGER
);

CREATE TABLE "spawn" (
  "id"	BIGSERIAL NOT NULL PRIMARY KEY,
	"BasePriceLabel"	VARCHAR(255),
	"BedrmCt"	INTEGER,
	"CountyName"	VARCHAR(255),
	"Metro"	VARCHAR(255),
	"RegionID"	INTEGER,
	"RegionName"	VARCHAR(255),
	"SizeRank"	INTEGER,
	"State"	VARCHAR(255),
	"StateName"	VARCHAR(255),
	"img_url"	VARCHAR(255),
	"base_price"	INTEGER,
	"base_price01"	INTEGER,
	"base_price02"	INTEGER,
	"base_price03"	INTEGER,
	"purchase_price"	INTEGER,
	"purchase_round"	INTEGER
);

DROP TABLE public.user CASCADE;
DROP TABLE public.post CASCADE;


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


