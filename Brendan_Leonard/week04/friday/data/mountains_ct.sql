CREATE TABLE mountains (
  mountain_id INTEGER PRIMARY KEY AUTOINCREMENT,
  mountain_name TEXT,
  altitude INTEGER,
  latitude TEXT,
  longitude TEXT,
  image_url TEXT
);

CREATE TABLE countries (
  country_code TEXT PRIMARY KEY,
  country_name TEXT
);

CREATE TABLE mountains_countries (
  mountain_id INTEGER,
  mountain_country_code TEXT,
  PRIMARY KEY ( mountain_id, mountain_country_code )
);

CREATE TABLE ascents (
  ascent_id INTEGER PRIMARY KEY AUTOINCREMENT,
  ascent_mountain_id INTEGER,
  ascent_date DATE,
  expedition_country_code TEXT,
  ascent_without_oxygen BOOLEAN
);

CREATE TABLE ascenders (
  ascender_id INTEGER PRIMARY KEY AUTOINCREMENT,
  ascender_name TEXT,
  ascender_country_code TEXT
);

CREATE TABLE ascender_ascents (
  ascent_id INTEGER,
  ascender_id INTEGER,
  ascender_order INTEGER,
  PRIMARY KEY ( ascent_id, ascender_id )
);
