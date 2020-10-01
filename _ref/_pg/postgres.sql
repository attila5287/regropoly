DROP TABLE public.description CASCADE;
CREATE TABLE "description" (
  "id"	SERIAL NOT NULL PRIMARY KEY,
  "url"	VARCHAR(256),
  "Notes"	VARCHAR(256),
  "PublicTable"	VARCHAR(256),	
  "Statistic"	VARCHAR(256),	
  "UnitOfMeasure"	VARCHAR(256)
  	);


CREATE TABLE "unemployment" (
  "id"	SERIAL NOT NULL PRIMARY KEY,
  "GeoName"	VARCHAR(32) UNIQUE,
  "1976" NUMERIC(2,1),
  "1977" NUMERIC(2,1),
  "1978" NUMERIC(2,1),
  "1979" NUMERIC(2,1),
  "1980" NUMERIC(2,1),
  "1981" NUMERIC(2,1),
  "1982" NUMERIC(2,1),
  "1983" NUMERIC(2,1),
  "1984" NUMERIC(2,1),
  "1985" NUMERIC(2,1),
  "1986" NUMERIC(2,1),
  "1987" NUMERIC(2,1),
  "1988" NUMERIC(2,1),
  "1989" NUMERIC(2,1),
  "1990" NUMERIC(2,1),
  "1991" NUMERIC(2,1),
  "1992" NUMERIC(2,1),
  "1993" NUMERIC(2,1),
  "1994" NUMERIC(2,1),
  "1995" NUMERIC(2,1),
  "1996" NUMERIC(2,1),
  "1997" NUMERIC(2,1),
  "1998" NUMERIC(2,1),
  "1999" NUMERIC(2,1),
  "2000" NUMERIC(2,1),
  "2001" NUMERIC(2,1),
  "2002" NUMERIC(2,1),
  "2003" NUMERIC(2,1),
  "2004" NUMERIC(2,1),
  "2005" NUMERIC(2,1),
  "2006" NUMERIC(2,1),
  "2007" NUMERIC(2,1),
  "2008" NUMERIC(2,1),
  "2009" NUMERIC(2,1),
  "2010" NUMERIC(2,1),
  "2011" NUMERIC(2,1),
  "2012" NUMERIC(2,1),
  "2013" NUMERIC(2,1),
  "2014" NUMERIC(2,1),
  "2015" NUMERIC(2,1),
  "2016" NUMERIC(2,1),
  "2017" NUMERIC(2,1),
  "2018" NUMERIC(2,1),
  "2019" NUMERIC(2,1)
);
