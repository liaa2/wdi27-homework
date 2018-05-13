CREATE TABLE climbers(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  second_name TEXT,
  description TEXT,
  age_climbed INTEGER,
  alive BOOLEAN,
  nationality TEXT,
  image_url TEXT,
  mountain_id INTEGER
);

INSERT INTO climbers(first_name, second_name, description, age_climbed, alive, nationality, image_url, mountain_id) VALUES("Samina", "Baig", "3rd Pakistani and only Pakistani woman to climb", 21, 1, "Pakistani", "https://c.tribune.com.pk/2015/11/986821-image-1446882334-144-640x480.jpg",2);

INSERT INTO climbers(first_name, second_name, description, age_climbed, alive, nationality, image_url, mountain_id) VALUES("Adam", "Bielecki", "He is a polish alpine and high-altitude climber. He is known for the first winter ascents", 17, 1, "Polish", "https://upload.wikimedia.org/wikipedia/commons/1/13/Adam_Bielecki_himalaista.jpg",1);

INSERT INTO climbers(first_name, second_name, description, age_climbed, alive, nationality, image_url, mountain_id) VALUES("Jim", "Bridwell", "He was an American rock climber and mountaineer, active since 1965 especially in Yosemite Valley, but also in Patagonia and Alaska", 25, 0, "American", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Jim_Bridwell_2003_cropped.jpg/440px-Jim_Bridwell_2003_cropped.jpg",4);
