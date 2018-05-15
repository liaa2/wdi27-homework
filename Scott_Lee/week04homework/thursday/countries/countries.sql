CREATE TABLE countries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    population INTEGER,
    continent TEXT,
    language TEXT,
    explored BOOLEAN
);

INSERT INTO countries ( name, population, continent, language, explored )
    VALUES ( "Australia", 23000000, "Oceania", "English", 1 );