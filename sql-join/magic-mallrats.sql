/*  first+last all rented Magic Mallrats547
films+customers+rentals+payments */

select  "c"."firstName",
        "c"."lastName"
    from "rentals"
    join "inventory" using ("inventoryId")
    join "customers" as "c" using ("customerId")
    where "filmId" = 547;
