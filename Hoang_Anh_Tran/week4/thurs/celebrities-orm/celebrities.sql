CREATE TABLE celebrities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name  TEXT,
  last_name   TEXT,
  occupation  TEXT,
  famous_for TEXT,
  alive       BOOLEAN,
  age         INTEGER,
  image_url   TEXT
);


INSERT INTO celebrities( first_name, last_name, occupation, famous_for, alive, age, image_url)
      VALUES ("Chris", "Hemsworth", "actor", "Thor", 1, 34, "http://static.businessinsider.com/image/59bc1340248849771e74b4be-750.jpg");

INSERT INTO celebrities( first_name, last_name, occupation, famous_for, alive, age, image_url)
      VALUES ("Marilyn", "Monroe", "actress", "Some Like It Hot", 0, 36, "https://www.biography.com/.image/t_share/MTE5NTU2MzE2MzIyMTA0ODQz/marilyn-monroe-9412123-1-402.jpg");

INSERT INTO celebrities( first_name, last_name, occupation, famous_for, alive, age, image_url)
      VALUES ("Rachel", "McAdams", "actress", "The Notebook", 1, 39, "http://7-themes.com/data_images/out/67/7002000-rachel-mcadams-the-notebook.jpg");
