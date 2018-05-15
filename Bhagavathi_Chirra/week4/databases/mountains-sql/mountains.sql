CREATE TABLE mountains(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  height INTEGER,
  range TEXT,
  parent_mountain TEXT,
  first_ascent INTEGER,
  country TEXT,
  image_url TEXT
);

INSERT INTO mountains(name,height,range,parent_mountain,first_ascent,country,image_url) VALUES("Nangpai Gosum",7350,"Mahalangur Himalaya","Cho Oyu",1996,"Nepal.China","https://c1.staticflickr.com/2/1349/5107410071_7ac898800a_b.jpg");

INSERT INTO mountains(name,height,range,parent_mountain,first_ascent,country,image_url) VALUES("Pumari Chhish",7492,"Hispar Karakoram","Khunyang Chhish",1979,"Pakistan","https://c1.staticflickr.com/2/1349/5107410071_7ac898800a_b.jpg");

INSERT INTO mountains(name,height,range,parent_mountain,first_ascent,country,image_url) VALUES("Trivor",7577,"Hispar Karakoram","Distaghil Sar",1960,"Pakistan","https://c1.staticflickr.com/2/1349/5107410071_7ac898800a_b.jpg");
