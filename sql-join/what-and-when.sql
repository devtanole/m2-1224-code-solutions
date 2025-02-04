/*  releaseYear, genreName, of Boogie Amelie ->
id86 films, genres, filmGenre */

select  "f"."title" as "title",
        "f"."releaseYear",
        "g"."name" as "genre"
    from "films" as "f"
    join "filmGenre" using ("filmId")
    join "genres" as "g" using ("genreId")
    where "filmId" = 86;
