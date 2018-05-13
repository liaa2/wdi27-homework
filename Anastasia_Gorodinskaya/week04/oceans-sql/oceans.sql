
CREATE TABLE oceans (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT,
  location    TEXT,
  area        INTEGER,
  volume      INTEGER,
  avg_depth   INTEGER,
  coastline   INTEGER,
  image_url   TEXT
  );

  INSERT INTO oceans( name, location, area, volume, avg_depth, coastline, image_url )
   VALUES( "Pacific Ocean", "Separates Asia and Oceania from the Americas", 168723000, 669880000, 3970, 135663, "https://i.pinimg.com/originals/97/4c/a7/974ca7003dd4239637fabc6e2538bdd2.jpg" );

   INSERT INTO oceans( name, location, area, volume, avg_depth, coastline, image_url )
   VALUES( "Atlantic Ocean", "Separates the Americas from Europe and Africa", 85133000, 310410900, 3646, 111866, "http://etretat.net/office-de-tourisme-etretat/uploads/imagemanager/gallerie/les-falaises-detretat/img_226344f4cf5843b4d6.jpg" );

   INSERT INTO oceans( name, location, area, volume, avg_depth, coastline, image_url )
   VALUES( "Indian Ocean", "Washes upon southern Asia and separates Africa and Australia", 70560000, 2640000000, 3741, 66526, "https://www.the-scientist.com/images/July2016/feature1.jpg" );

   INSERT INTO oceans( name, location, area, volume, avg_depth, coastline, image_url )
   VALUES( "Southern Ocean", "Sometimes considered an extension of the Pacific, Atlantic and Indian Oceans, which encircles Antarctica", 21960000, 71800000, 3270, 17968, "https://media-cdn.tripadvisor.com/media/photo-i/0e/6d/d8/c1/view-from-turtle-lair.jpg" );

   INSERT INTO oceans( name, location, area, volume, avg_depth, coastline, image_url )
   VALUES( "Arctic Ocean", "Sometimes considered a sea or estuary of the Atlantic, which covers much of the Arctic and washes upon northern North America and Eurasia", 15558000, 18750000, 1205, 45389, "https://www.worldatlas.com/r/w728-h425-c728x425/upload/1f/42/05/shutterstock-429059008.jpg" );
