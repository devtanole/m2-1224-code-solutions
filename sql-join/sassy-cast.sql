/*  first+last in Jersey Sassy -> actors+films+castMem  485 */

select "a"."firstName",
        "a"."lastName",
        "f"."title"
    from "actors" as "a"
    join "castMembers" using ("actorId")
    join "films" as "f" using ("filmId")
    where "filmId" = 485;
