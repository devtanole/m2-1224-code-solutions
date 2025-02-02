/*  first+last all rented Magic Mallrats547
films+customers+rentals+payments */

select  "c"."firstName",
        "c"."lastName",
        "f"."title"
    from "customers" as "c"
    join "inventory" using ("storeId")
    join "rentals" using ("customerId")
    join "films" as "f" using ("filmId")
    where "filmId" = 547;
