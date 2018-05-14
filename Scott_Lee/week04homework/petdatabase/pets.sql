CREATE TABLE pets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    species TEXT,
    age INTEGER,
    sex INTEGER,
    picture TEXT,
    description TEXT
);

INSERT INTO pets( first_name, last_name, species, age, sex, picture, description )
    VALUES ( "Benji", "Lee", "Cat", 1, 1, "http://www.fillmurray.com/200/200", "the fuckin boss");

INSERT INTO pets( first_name, last_name, species, age, sex, picture, description )
VALUES ( "Tiger", "Cove", "Cat", 1, 1, "http://www.fillmurray.com/250/200", "scratched me");
