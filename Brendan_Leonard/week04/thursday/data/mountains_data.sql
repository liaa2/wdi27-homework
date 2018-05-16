INSERT INTO mountains ( mountain_name, altitude, latitude, longitude, image_url )
VALUES ( "Everest", 8848, "27.9846° N", "86.9258° E", "" );
INSERT INTO mountains ( mountain_name, altitude, latitude, longitude, image_url )
VALUES ( "K2", 8611, "35.8800° N", "76.5151° E", "" );
INSERT INTO mountains ( mountain_name, altitude, latitude, longitude, image_url )
VALUES ( "Kosciuszko", 2228, "36.4559° S", "36.4559° S", "" );

INSERT INTO countries ( country_code, country_name ) VALUES ( "NPL", "Nepal" );
INSERT INTO countries ( country_code, country_name ) VALUES ( "CHN", "China" );
INSERT INTO countries ( country_code, country_name ) VALUES ( "IND", "India" );
INSERT INTO countries ( country_code, country_name ) VALUES ( "PAK", "Pakistan" );
INSERT INTO countries ( country_code, country_name ) VALUES ( "GBR", "Great Britain" );
INSERT INTO countries ( country_code, country_name ) VALUES ( "NZL", "New Zealand" );
INSERT INTO countries ( country_code, country_name ) VALUES ( "ITA", "Italy" );
INSERT INTO countries ( country_code, country_name ) VALUES ( "CHE", "Switzerland" );
INSERT INTO countries ( country_code, country_name ) VALUES ( "FRA", "France" );
INSERT INTO countries ( country_code, country_name ) VALUES ( "AUT", "Austria" );
INSERT INTO countries ( country_code, country_name ) VALUES ( "JPN", "Japan" );
INSERT INTO countries ( country_code, country_name ) VALUES ( "USA", "USA" );
INSERT INTO countries ( country_code, country_name ) VALUES ( "AUS", "Australia" );
INSERT INTO countries ( country_code, country_name ) VALUES ( "GER", "Germany" );

INSERT INTO mountains_countries VALUES ( mountain_id, mountain_country_code ) VALUES ( 1, "NPL" );
INSERT INTO mountains_countries VALUES ( mountain_id, mountain_country_code ) VALUES ( 1, "CHN" );
INSERT INTO mountains_countries VALUES ( mountain_id, mountain_country_code ) VALUES ( 2, "PAK" );
INSERT INTO mountains_countries VALUES ( mountain_id, mountain_country_code ) VALUES ( 2, "CHN" );
INSERT INTO mountains_countries VALUES ( mountain_id, mountain_country_code ) VALUES ( 3, "AUS" );

INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Edmund Hillary", "NZL" );
INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Tenzing Norgay", "IND" );
INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Jurg Marmet", "CHE" );
INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Ernst Schmied", "CHE" );
INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Adolf Reist", "CHE" );
INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Hansrudolf Von Gunten", "CHE" );
INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Yin-hua Chu", "CHN" );
INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Konbu", "CHN" );
INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Fu-Zhou Wang", "CHN" );
INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Reinhold Messner", "ITA" );
INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Peter Habeler", "AUT" );
INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Hans Engl", "GER" );
INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Mingma Nuru", "NPL" );
INSERT INTO ascenders ( ascender_name, ascender_country_code ) VALUES ( "Ang Dorje", "NPL" );

INSERT INTO ascents ( ascent_mountain_id, ascent_date, expedition_country_code, ascent_without_oxygen ) VALUES ( 1, "1953-05-29", "GBR", 0 );
INSERT INTO ascents ( ascent_mountain_id, ascent_date, expedition_country_code, ascent_without_oxygen ) VALUES ( 1, "1956-05-23", "CHE", 0 );
INSERT INTO ascents ( ascent_mountain_id, ascent_date, expedition_country_code, ascent_without_oxygen ) VALUES ( 1, "1956-05-24", "CHE", 0 );
INSERT INTO ascents ( ascent_mountain_id, ascent_date, expedition_country_code, ascent_without_oxygen ) VALUES ( 1, "1960-05-25", "CHN", 0 );
INSERT INTO ascents ( ascent_mountain_id, ascent_date, expedition_country_code, ascent_without_oxygen ) VALUES ( 1, "1978-05-08", "AUT", 1 );
INSERT INTO ascents ( ascent_mountain_id, ascent_date, expedition_country_code, ascent_without_oxygen ) VALUES ( 1, "1978-10-14", "AUT", 1 );
INSERT INTO ascents ( ascent_mountain_id, ascent_date, expedition_country_code, ascent_without_oxygen ) VALUES ( 1, "1978-10-16", "AUT", 1 );

INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 1, 1, 1 );
INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 1, 2, 2 );
INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 2, 3, 1 );
INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 2, 4, 2 );
INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 3, 5, 1 );
INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 3, 6, 2 );
INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 4, 7, 1 );
INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 4, 8, 2 );
INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 4, 9, 3 );
INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 5, 10, 1 );
INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 5, 11, 2 );
INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 6, 12, 1 );
INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 7, 13, 1 );
INSERT INTO ascender_ascents ( ascent_id, ascender_id, ascender_order ) VALUES ( 7, 14, 2 );
