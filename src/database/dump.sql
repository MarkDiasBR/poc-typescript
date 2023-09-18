-- Drop the "movies_genres" table if it exists
DROP TABLE IF EXISTS "movie_genres";

-- Drop the "movies" table if it exists
DROP TABLE IF EXISTS "movies";

-- Drop the "genres" table if it exists
DROP TABLE IF EXISTS "genres";

-- Create the "movies" table
CREATE TABLE "movies" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(255) NOT NULL,
  "year" NUMERIC(4, 0) CHECK ("year" >= 1800 AND "imdb_score" <= EXTRACT(YEAR FROM current_date) + 5),
  "imdb_url" VARCHAR(255),
  "imdb_score" NUMERIC(3, 1) CHECK ("imdb_score" >= 0.0 AND "imdb_score" <= 10.0),
  "already_watched" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Create the "genres" table
CREATE TABLE "genres" (
	"id" SERIAL PRIMARY KEY,
	"genre" VARCHAR(100) NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Insert genres into the "genres" table
INSERT INTO "genres" ("genre", "id") VALUES
  ('Action', 1),
  ('Adventure', 2),
  ('Animation', 3),
  ('Comedy', 4),
  ('Crime', 5),
  ('Drama', 6),
  ('Family', 7),
  ('Fantasy', 8),
  ('Horror', 9),
  ('Musical', 10),
  ('Mystery', 11),
  ('Romance', 12),
  ('Sci-Fi', 13),
  ('Thriller', 14),
  ('Western', 15),
  ('Biography', 16),
  ('Documentary', 17),
  ('History', 18),
  ('War', 19),
  ('Sport', 20);

-- Create the "movie_genres" table
CREATE TABLE "movie_genres" (
	"id" SERIAL PRIMARY KEY,
	"movie_id" INT REFERENCES "movies" ("id"),
	"genre_id" INT REFERENCES "genres" ("id"),
	"created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Insert movies into the "movies" table
INSERT INTO "movies" (title, year, imdb_score, already_watched)
VALUES
    ('Matrix', 1999, 8.7, TRUE),
    ('Barbie', 2023, 7.2, FALSE),
    ('Inception', 2010, 8.8, TRUE),
    ('The Shawshank Redemption', 1994, 9.3, TRUE),
    ('The Godfather', 1972, 9.2, TRUE),
    ('Pulp Fiction', 1994, 8.9, TRUE),
    ('The Dark Knight', 2008, 9.0, TRUE);

-- Create associations between movies and genres in the "movie_genres" table
-- Assigning genres to the movies based on "movie_id" and "genre_id"

-- For the movie 'Matrix', assign genres 'Action' and 'Sci-Fi'
INSERT INTO "movie_genres" ("movie_id", "genre_id")
VALUES (1, 1), (1, 13);

-- For the movie 'Barbie', assign genre 'Animation'
INSERT INTO "movie_genres" ("movie_id", "genre_id")
VALUES (2, 3);

-- For the movie 'Inception', assign genres 'Action' and 'Sci-Fi'
INSERT INTO "movie_genres" ("movie_id", "genre_id")
VALUES (3, 1), (3, 13);

-- For the movie 'The Shawshank Redemption', assign genre 'Drama'
INSERT INTO "movie_genres" ("movie_id", "genre_id")
VALUES (4, 6);

-- For the movie 'The Godfather', assign genre 'Crime'
INSERT INTO "movie_genres" ("movie_id", "genre_id")
VALUES (5, 5);

-- For the movie 'Pulp Fiction', assign genres 'Crime' and 'Drama'
INSERT INTO "movie_genres" ("movie_id", "genre_id")
VALUES (6, 5), (6, 6);

-- For the movie 'The Dark Knight', assign genres 'Action', 'Crime', and 'Drama'
INSERT INTO "movie_genres" ("movie_id", "genre_id")
VALUES (7, 1), (7, 5), (7, 6);
