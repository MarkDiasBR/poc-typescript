-- Drop the "movies" table if it exists
DROP TABLE IF EXISTS "movies";

-- Create the "movies" table
CREATE TABLE "movies" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(255) NOT NULL,
  "year" NUMERIC(4, 0) CHECK ("year" >= 1800 AND "year" <= EXTRACT(YEAR FROM current_date) + 5),
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Insert movies into the "movies" table
INSERT INTO "movies" (title, year)
VALUES
    ('Matrix', 1999),
    ('Barbie', 2023),
    ('Inception', 2010),
    ('The Shawshank Redemption', 1994),
    ('The Godfather', 1972),
    ('Pulp Fiction', 1994),
    ('The Dark Knight', 2008);
